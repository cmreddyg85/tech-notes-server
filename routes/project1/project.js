const express = require("express");

const {
  numOfYears,
  accountInfo,
  transactions,
} = require("../../data/project1");

const router = express.Router();
const { chromium } = require("playwright");

router.get("/sbi-user-details", (req, res) => {
  res.json({
    numOfYears,
    accountInfo,
    transactions,
  });
});

// API endpoint to generate and download the PDF
router.post("/generate-sbi-statement", async (req, res) => {
  try {
    // Examples
    //console.log(formatDate("01/03/2019"));  // → "01 Mar 2019"
    //console.log(formatDate("01-Mar-19"));   // → "01 Mar 2019"
    function dateFormat(input = "") {
      let date;

      if (input.includes("/")) {
        // Handle "01/03/2019" format
        const [day, month, year] = input.split("/");
        date = new Date(
          `${year.length === 2 ? "20" + year : year}-${month}-${day}`,
        );
      } else if (input.includes("-")) {
        // Handle "01-Mar-19" format
        const [day, monStr, year] = input.split("-");
        date = new Date(
          `${year.length === 2 ? "20" + year : year}-${monStr}-${day}`,
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
         background: white !important;
      }

      .sbi-container {
        margin: 0 auto;
        background: white;
      }

      .sbi-info-row {
        margin-bottom: 0.313rem;
        font-size: 0.75rem;
      }

      .sbi-info-label {
        width: 144px;
        display: inline-block;
        vertical-align: top;
      }
      .sbi-info-value {
        display: inline-block;
      }
      .sbi-address-line2 {
        margin-left: 5px;
        margin-bottom: 0.313rem;
      }
      .sbi-address-line {
        margin-left: 5px;
        margin-bottom: 0.313rem;
      }

      .sbi-statement-period {
        margin-top: 2.2rem;
        margin-bottom: 1.4rem;
        font-size: 1rem;
      }

      table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
      }
      
      tr {
        page-break-inside: avoid; /* prevent row split across pages */
      }

      .sbi-transaction-table {
        width: 100%;
        max-width: 100%;
        margin-bottom: 4px;
        background-color: transparent;
      }

      .sbi-transaction-table td {
        padding: 4px 4px 1px 2px;
        vertical-align: top;
        font-size: 0.75rem;
      }

      .sbi-transaction-table th {
        padding: 4px 6px 1px 2px;
        vertical-align: top;
        font-size: 0.8rem;
        line-height: 1;
      }

      .sbi-transaction-table .sbi-amount {
        text-align: right;
      }

      .sbi-transaction-table .sbi-desc {
        word-break: break-word; /* Breaks words only when necessary */
        word-break: break-all;  /* Breaks words at any character */
        word-wrap: break-word;
      }

      .sbi-notice {
        text-indent: 1.2rem;
        font-size: 0.75rem;
        line-height: 1.5;
        margin-bottom: 1.5rem;
        text-align: justify;
      }

      .sbi-footer {
        font-size: 0.75rem;
      }
    </style>
  </head>

  <body>
    <div class="sbi-container">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/5/58/State_Bank_of_India_logo.svg"
        height="51"
        style="margin-bottom: 15px; margin-left: 10px"
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
            accountInfo.balanceDate,
          )}</div>
          <div class="sbi-info-value">: ${formatToIndianDenomination(
            accountInfo.openingBalance,
          )}</div>
        </div>
      </div>

      <div class="sbi-statement-period">
        Account Statement from ${dateFormat(
          accountInfo.startDate,
        )} to ${dateFormat(accountInfo.endDate)}
      </div>

      <div class="sbi-divider"></div>

      <table class="sbi-transaction-table">
        <thead>
          <tr>
            <th style="width: 10%; text-align: left">Txn Date</th>
            <th style="width: 10%; text-align: left">Value Date</th>
            <th style="width: 25%; text-align: left">Description</th>
            <th style="width: 17%; text-align: left">Ref No./Cheque No.</th>
            <th style="text-align: right;">Debit</th>
            <th style="text-align: right;">Credit</th>
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
              <td class="sbi-desc">${txn.Narration}</td>
              <td class="sbi-desc">${txn.Ref}</td>
              <td class="sbi-amount">${formatToIndianDenomination(
                txn.Debit,
              )}</td>
              <td class="sbi-amount">${formatToIndianDenomination(
                txn.Credit,
              )}</td>
              <td class="sbi-amount">${formatToIndianDenomination(
                txn.Balance,
              )}</td>
            </tr>
          `,
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
    // const pdfOptions = {
    //   format: "A4",
    //   border: {
    //     top: "15mm",
    //     right: "13mm",
    //     bottom: "9mm",
    //     left: "13mm",
    //   },
    //   timeout: 60000,
    // };

    // // Generate PDF
    // pdf.create(htmlContent, pdfOptions).toStream((err, stream) => {
    //   if (err) {
    //     return res.status(500).send("Error generating PDF");
    //   }

    //   const timestamp = Date.now();
    //   const randomStr = Math.random().toString(36).substring(2, 18);

    //   res.setHeader("Content-Type", "application/pdf");
    //   res.setHeader(
    //     "Content-Disposition",
    //     `attachment; filename=${timestamp}${randomStr}.pdf`
    //   );
    //   stream.pipe(res);
    // });

    const browser = await chromium.launch({
      headless: true,
    });
    const page = await browser.newPage();

    // Load the HTML directly in the page
    await page.setContent(htmlContent, {
      waitUntil: "networkidle",
    });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: {
        top: "15mm",
        right: "13mm",
        bottom: "9mm",
        left: "13mm",
      },
    });

    await browser.close();

    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(2, 18);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${timestamp}${randomStr}.pdf`,
    );

    res.send(pdfBuffer);
  } catch (error) {
    res.status(500).json({ error: `Internal server error-${error}` });
  }
});

module.exports = router;
