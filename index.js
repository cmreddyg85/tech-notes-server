const express = require("express");
const { get, set } = require("@vercel/blob"); // Import Vercel Blob methods
const cors = require("cors");
const pdf = require("./utils/html-pdf");

const app = express();
app.use(express.json());
app.use(cors());

const BUCKET_NAME = "feedback"; // Replace with a relevant bucket name

// Get feedback from Vercel Blob
app.get("/api/feedback/:route", async (req, res) => {
  const route = req.params.route || "default";
  const blobKey = `${BUCKET_NAME}/${route}.json`;

  try {
    const result = await get(blobKey);

    if (result.status === 404) {
      // Return an empty list if the feedback file does not exist
      return res.json({ feedback: [] });
    }

    const feedbackData = JSON.parse(result.body.toString());
    res.json({ feedback: feedbackData });
  } catch (error) {
    console.error("Error fetching feedback:", error);
    res.status(500).send("Error fetching feedback.");
  }
});

// Save feedback to Vercel Blob
app.post("/api/feedback/:route", async (req, res) => {
  const route = req.params.route || "default";
  const blobKey = `${BUCKET_NAME}/${route}.json`;

  const { name, feedback } = req.body;

  if (!name || !feedback) {
    return res.status(400).send("Name and feedback are required.");
  }

  try {
    let feedbackList = [];
    const result = await get(blobKey);

    if (result.status !== 404) {
      feedbackList = JSON.parse(result.body.toString());
    }

    feedbackList.push({ name, feedback });

    await set(blobKey, JSON.stringify(feedbackList, null, 2), {
      contentType: "application/json",
    });

    res.status(201).send("Feedback saved successfully.");
  } catch (error) {
    console.error("Error saving feedback:", error);
    res.status(500).send("Error saving feedback.");
  }
});

// Delete feedback from Vercel Blob
app.delete("/api/feedback/:route/:index", async (req, res) => {
  const route = req.params.route || "default";
  const index = parseInt(req.params.index);
  const blobKey = `${BUCKET_NAME}/${route}.json`;

  try {
    const result = await get(blobKey);

    if (result.status === 404) {
      return res.status(404).send("Feedback file not found.");
    }

    const feedbackList = JSON.parse(result.body.toString());

    if (index < 0 || index >= feedbackList.length) {
      return res.status(400).send("Invalid feedback index.");
    }

    feedbackList.splice(index, 1); // Remove the feedback at the specified index

    await set(blobKey, JSON.stringify(feedbackList, null, 2), {
      contentType: "application/json",
    });

    res.status(200).send("Feedback deleted successfully.");
  } catch (error) {
    console.error("Error deleting feedback:", error);
    res.status(500).send("Error deleting feedback.");
  }
});

// API endpoint to generate and download the PDF
app.post("/api/generate-sbi-statement", (req, res) => {
  try {
    // Examples
    //console.log(formatDate("01/03/2019"));  // → "01 Mar 2019"
    //console.log(formatDate("01-Mar-19"));   // → "01 Mar 2019"
    function dateFormat(input) {
      let date;

      if (input.includes("/")) {
        // Handle "01/03/2019" format
        const [day, month, year] = input.split("/");
        date = new Date(
          `${year.length === 2 ? "20" + year : year}-${month}-${day}`
        );
      } else if (input.includes("-")) {
        // Handle "01-Mar-19" format
        const [day, monStr, year] = input.split("-");
        date = new Date(
          `${year.length === 2 ? "20" + year : year}-${monStr}-${day}`
        );
      }

      const options = { day: "numeric", month: "short", year: "numeric" };

      return date?.toLocaleDateString("en-GB", options) || input;
    }

    function formatToIndianDenomination(balance) {
      if (typeof balance !== "string") return balance;
      if (balance.includes(",")) return balance;

      const number = parseFloat(balance);
      if (isNaN(number)) return balance;

      return number.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }

    const accountInfo = req.body.accountInfo;
    const transactions = req.body.transactions;

    // Direct HTML with embedded CSS
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SBI Account Statement</title>
    <style>
      body {
        margin: 0 auto;
        padding: 0;
        font-family: Arial, sans-serif;
        background: #f5f5f5;
        width: 100%;
      }

      .sbi-container {
        margin: 0 auto;
        background: white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      .sbi-info-row {
        margin-bottom: 4px;
        font-size: 0.563rem;
      }

      .sbi-info-label {
        width: 108px;
        display: inline-block;
        vertical-align: top;
      }

      .sbi-info-value {
        display: inline-block;
      }

      .sbi-address-line2 {
        margin-left: 5px;
      }

      .sbi-statement-period {
        margin-top: 25px;
        margin-bottom: 15px;
        font-size: 0.75rem;
      }

      table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
      }

      .sbi-transaction-table {
        width: 100%;
        max-width: 100%;
        margin-bottom: 4px;
        background-color: transparent;
      }

      .sbi-transaction-table td {
        padding: 3px 2px 0px 2px;
        vertical-align: top;
        font-size: 0.563rem;
      }

      .sbi-transaction-table th {
        padding: 4px 4px 1px 2px;
        vertical-align: top;
        font-size: 0.625rem;
        line-height: 1;
      }

      .sbi-transaction-table .sbi-amount {
        text-align: right;
      }

      .sbi-notice {
        text-indent: 1rem;
        font-size: 0.563rem;
        line-height: 1.5;
        margin-bottom: 15px;
        text-align: justify;
      }

      .sbi-footer {
        font-size: 0.563rem;
      }
    </style>
  </head>

  <body>
    <div class="sbi-container">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/5/58/State_Bank_of_India_logo.svg"
        height="38"
        style="margin-bottom: 10px; margin-left: 7px"
      />

      <div class="sbi-info-container">
        <div class="sbi-info-row">
          <div class="sbi-info-label">Account Name</div>
          <div class="sbi-info-value">: ${accountInfo.accountName}</div>
        </div>
        <div class="sbi-info-row">
          <div class="sbi-info-label">Address</div>
          <div class="sbi-info-value">
            <div class="sbi-address-line">: ${accountInfo.addressLine1}</div>
            <div class="sbi-address-line2">${accountInfo.addressLine2}</div>
            <div class="sbi-address-line2">${accountInfo.addressLine3}</div>
            <div class="sbi-address-line2">${accountInfo.addressLine4}</div>
          </div>
        </div>

        <div class="sbi-info-row">
          <div class="sbi-info-label">Date</div>
          <div class="sbi-info-value">: ${accountInfo.statementDate}</div>
        </div>
        <div class="sbi-info-row">
          <div class="sbi-info-label">Account Number</div>
          <div class="sbi-info-value">: ${accountInfo.accountNumber}</div>
        </div>
        <div class="sbi-info-row">
          <div class="sbi-info-label">Account Description</div>
          <div class="sbi-info-value">: ${accountInfo.accountDescription}</div>
        </div>
        <div class="sbi-info-row">
          <div class="sbi-info-label">Branch</div>
          <div class="sbi-info-value">: ${accountInfo.branch}</div>
        </div>
        <div class="sbi-info-row">
          <div class="sbi-info-label">Drawing Power</div>
          <div class="sbi-info-value">: ${accountInfo.drawingPower}</div>
        </div>
        <div class="sbi-info-row">
          <div class="sbi-info-label">Interest Rate(% p.a.)</div>
          <div class="sbi-info-value">: ${accountInfo.interestRate}</div>
        </div>
        <div class="sbi-info-row">
          <div class="sbi-info-label">MOD Balance</div>
          <div class="sbi-info-value">: ${accountInfo.modBalance}</div>
        </div>
      </div>

      <div class="sbi-info-container">
        <div class="sbi-info-row">
          <div class="sbi-info-label">CIF No.</div>
          <div class="sbi-info-value">: ${accountInfo.cifNumber}</div>
        </div>
        <div class="sbi-info-row">
          <div class="sbi-info-label">CKYCR Number</div>
          <div class="sbi-info-value">: ${accountInfo.ckycrNumber}</div>
        </div>
        <div class="sbi-info-row">
          <div class="sbi-info-label">
            <div>IFS Code</div>
          </div>
          <div class="sbi-info-value">: ${accountInfo.ifsCode}</div>
        </div>
        <div class="sbi-info-row">(Indian Financial System)</div>

        <div class="sbi-info-row">
          <div class="sbi-info-label">
            <div>MICR Code</div>
          </div>
          <div class="sbi-info-value">: ${accountInfo.micrCode}</div>
        </div>
        <div class="sbi-info-row">(Magnetic Ink Character Recognition)</div>

        <div class="sbi-info-row">
          <div class="sbi-info-label">Nomination Registered</div>
          <div class="sbi-info-value">: ${accountInfo.nomination}</div>
        </div>
        <div class="sbi-info-row">
          <div class="sbi-info-label">Balance as on ${dateFormat(
            accountInfo.balanceDate
          )}</div>
          <div class="sbi-info-value">: ${formatToIndianDenomination(
            accountInfo.openingBalance
          )}</div>
        </div>
      </div>

      <div class="sbi-statement-period">
        Account Statement from ${dateFormat(
          accountInfo.startDate
        )} to ${dateFormat(accountInfo.endDate)}
      </div>

      <div class="sbi-divider"></div>

      <table class="sbi-transaction-table">
        <thead>
          <tr>
            <th style="width: 12%; text-align: left">Txn Date</th>
            <th style="width: 11%; text-align: left">Value Date</th>
            <th style="text-align: left">Description</th>
            <th style="width: 17%; text-align: left">Ref No./Cheque No.</th>
            <th style="text-align: right; width: 15%">Debit</th>
            <th style="text-align: right; width: 15%">Credit</th>
            <th style="text-align: right; width: 17%">Balance</th>
          </tr>
        </thead>
        <tbody>
          ${transactions
            .map(
              (txn) => `
            <tr>
              <td class="sbi-amount">${dateFormat(txn.Date)}</td>
              <td class="sbi-amount">${dateFormat(txn.Date)}</td>
              <td>${txn.Narration}</td>
              <td>${txn.Ref}</td>
              <td class="sbi-amount">${formatToIndianDenomination(
                txn.Debit
              )}</td>
              <td class="sbi-amount">${formatToIndianDenomination(
                txn.Credit
              )}</td>
              <td class="sbi-amount">${formatToIndianDenomination(
                txn.Balance
              )}</td>
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>

      <div class="sbi-notice">
        Please do not share your ATM, Debit/Credit card number, PIN (Personal
        Identification Number) and OTP (One Time Password) with anyone over
        mail, SMS, phone call or any other media. Bank never asks for such
        information.
      </div>

      <div class="sbi-footer">
        **This is a computer generated statement and does not require a
        signature.
      </div>
    </div>
  </body>
</html>`;

    // PDF options
    const pdfOptions = {
      format: "A4",
      border: {
        top: "15mm",
        right: "9mm",
        bottom: "9mm",
        left: "10mm",
      },
      timeout: 60000,
    };

    // Generate PDF
    pdf.create(htmlContent, pdfOptions).toStream((err, stream) => {
      if (err) {
        return res.status(500).send("Error generating PDF");
      }

      const timestamp = Date.now();
      const randomStr = Math.random().toString(36).substring(2, 18);

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        `attachment; filename=${timestamp}${randomStr}.pdf`
      );
      stream.pipe(res);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
