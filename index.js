const express = require("express");
const { get, set } = require("@vercel/blob"); // Import Vercel Blob methods
const cors = require("cors");
const PDFDocument = require("pdfkit");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");

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
  //try {
    const accountInfo = req.body.accountInf || {
      accountName: "Mr. G CHANDRAMOULI REDDY",
      accountNumber: "00000031529681353",
      branch: "VIVEKANANDA NAGAR KUKATPALLY",
      addressLine1: "FLAT NO 302, HNO-4-32-1/114,",
      addressLine2: "PARDHASAI CLASSIC",
      addressLine3: "SAPTHAGIRI COLONY, KUKATPALLY-500072",
      addressLine4: "RANGA REDDY",
      statementDate: "3 Apr 2025",
      accountDescription: "REGULAR SB NCHQ-INDIVIDUALS",
      drawingPower: "0.00",
      interestRate: "2.7",
      modBalance: "0.00",
      cifNumber: "85926748395",
      ckycrNumber: "",
      ifsCode: "SBN0017761",
      micrCode: "500002223",
      nomination: "Yes",
      balanceDate: "1 Apr 2023",
      openingBalance: "6,685.21",
      startDate: "1 Apr 2023",
      endDate: "31 Mar 2024",
    };

    const transactions = req.body.transactions || [
      {
        txnDate: "25 Jun 2023",
        valueDate: "25 Jun 2023",
        description: "CREDIT INTEREST--",
        reference: "",
        debit: "",
        credit: "46.00",
        balance: "6,731.21",
      },
    ];

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
        width: 143mm;
      }

      .sbi-container {
        margin: 0 auto;
        background: white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      .sbi-info-row {
        margin-bottom: 4px;
        font-size: 9px;
      }

      .sbi-info-label {
        width: 110px;
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
        font-size: 11px;
      }

      .sbi-transaction-table {
        width: 100%;
        max-width: 100%;
        margin-bottom: 4px;
        background-color: transparent;
        border: 1px solid #000;
        border-collapse: collapse;
        
      }

      .sbi-transaction-table td {
        padding: 1px 2px 0px 2px;
        vertical-align: top;
        border: 1px solid #000;
        vertical-align: top;
        font-size: 9px;
      }

      .sbi-transaction-table th {
        padding: 4px 2px 1px 2px;
        vertical-align: top;
        border: 1px solid #000;
        vertical-align: top;
        font-size: 10px;
      }

      .sbi-transaction-table .sbi-amount {
        text-align: right;
      }

      .sbi-notice {
        text-indent: 17px;
        font-size: 9px;
        line-height: 1.5;
        margin-bottom: 15px;
      }

      .sbi-footer {
        font-size: 9px;
      }
    </style>
  </head>

  <body>
    <div class="sbi-container">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/5/58/State_Bank_of_India_logo.svg"
        height="39"
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
          <div class="sbi-info-label">Balance as on ${
            accountInfo.balanceDate
          }</div>
          <div class="sbi-info-value">: ${accountInfo.openingBalance}</div>
        </div>
      </div>

      <div class="sbi-statement-period">
        Account Statement from ${accountInfo.startDate} to ${
      accountInfo.endDate
    }
      </div>

      <div class="sbi-divider"></div>

      <table class="sbi-transaction-table">
        <thead>
          <tr>
            <th style="width: 52px; text-align: left">Txn Date</th>
            <th style="width: 52px; text-align: left">Value Date</th>
            <th style="text-align: left">Description</th>
            <th style="width: 76px; text-align: left">Ref No./Cheque No.</th>
            <th style="text-align: right; width: 70px">Debit</th>
            <th style="text-align: right; width: 70px">Credit</th>
            <th style="text-align: right; width: 80px">Balance</th>
          </tr>
        </thead>
        <tbody>
          ${transactions
            .map(
              (txn) => `
            <tr>
              <td>${txn.txnDate || txn.Date}</td>
              <td>${txn.valueDate || txn.Date}</td>
              <td>${txn.description || txn.Narration}</td>
              <td>${txn.reference || txn.Ref}</td>
              <td class="sbi-amount">${txn.debit || txn.Debit}</td>
              <td class="sbi-amount">${txn.credit || txn.Credit}</td>
              <td class="sbi-amount">${txn.balance || txn.Balance}</td>
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
  //} catch (error) {
    //res.status(500).json({ error: "Internal server error" });
  //}
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
