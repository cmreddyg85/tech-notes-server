const express = require("express");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const {
  numOfYears,
  accountInfo,
  transactions,
} = require("../../data/project1");

const router = express.Router();
const { chromium } = require("playwright");
const { PDFDocument } = require("@cantoo/pdf-lib");
const multer = require("multer");
const { icons } = require("./icons");
const { sleep } = require("../../utils/utils");
const { generateSbiTransactions } = require("./generate");
const { extractSbiAccountInfo } = require("./extract");

function parseDateInput(dateStr = "") {
  const trimmed = dateStr.trim();

  if (!trimmed) {
    return null;
  }

  if (trimmed.includes("/")) {
    const [day, month, year] = trimmed.split("/").map(Number);

    if (!day || !month || !year) {
      return null;
    }

    return new Date(year, month - 1, day, 0, 0, 0, 0);
  }

  if (trimmed.includes("-")) {
    const [first, second, third] = trimmed.split("-");

    if (/^\d+$/.test(second)) {
      const day = Number(first);
      const month = Number(second);
      const year = Number(third);

      if (!day || !month || !year) {
        return null;
      }

      return new Date(year, month - 1, day, 0, 0, 0, 0);
    }

    const parsedDate = new Date(trimmed);

    if (Number.isNaN(parsedDate.getTime())) {
      return null;
    }

    parsedDate.setHours(0, 0, 0, 0);

    return parsedDate;
  }

  const parsedDate = new Date(trimmed);

  if (Number.isNaN(parsedDate.getTime())) {
    return null;
  }

  parsedDate.setHours(0, 0, 0, 0);

  return parsedDate;
}

function formatSlashDate(date) {
  const pad = (value) => String(value).padStart(2, "0");

  return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`;
}

function getEndOfDay(date) {
  const endOfDay = new Date(date);
  endOfDay.setHours(23, 59, 59, 999);
  return endOfDay;
}

function getDateRanges(fromDate, toDate) {
  const endDate = new Date(toDate);
  endDate.setHours(23, 59, 59, 999);

  const ranges = [];
  let currentStart = new Date(fromDate);
  currentStart.setHours(0, 0, 0, 0);

  while (currentStart <= endDate) {
    const tentativeEnd = new Date(currentStart);
    tentativeEnd.setFullYear(tentativeEnd.getFullYear() + 1);
    tentativeEnd.setDate(tentativeEnd.getDate() - 1);
    tentativeEnd.setHours(0, 0, 0, 0);

    const currentEnd =
      tentativeEnd > endDate ? new Date(endDate) : tentativeEnd;

    ranges.push({
      from: new Date(currentStart),
      to: currentEnd,
    });

    const nextStart = new Date(currentEnd);
    nextStart.setDate(nextStart.getDate() + 1);
    nextStart.setHours(0, 0, 0, 0);
    currentStart = nextStart;
  }

  return ranges;
}

function sanitizeFileName(value = "statement") {
  return (
    value.replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "") || "statement"
  );
}

router.get("/sbi-user-details", (req, res) => {
  res.json({
    numOfYears,
    accountInfo,
    transactions,
  });
});

router.post("/sbi-generate-transactions", async (req, res) => {
  try {
    const { downloadJson = false, ...payload } = req.body || {};
    const result = generateSbiTransactions(payload);

    if (result.invalidDates.length > 0) {
      res.status(400).json({
        invalidDates: result.invalidDates,
      });
      return;
    }

    if (downloadJson) {
      const fileName = `final-${(
        result.accountInfo.customerName || "transactions"
      )
        .replace(/[^a-z0-9]+/gi, "-")
        .replace(/^-+|-+$/g, "")}.json`;

      res.setHeader("Content-Type", "application/json");
      res.setHeader(
        "Content-Disposition",
        `attachment; filename="${fileName}"`,
      );
      res.send(JSON.stringify(result, null, 2));
      return;
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: `Internal server error - ${error.message}` });
  }
});

// API endpoint to generate and download the PDF
async function generateSbiStatement(req, res) {
  try {
    // Helper: format date (not strictly needed but kept for consistency)
    function dateFormat(input = "") {
      let date;
      if (input.includes("/")) {
        const [day, month, year] = input.split("/");
        date = new Date(
          `${year.length === 2 ? "20" + year : year}-${month}-${day}`,
        );
      } else if (input.includes("-")) {
        const [day, monStr, year] = input.split("-");
        date = new Date(
          `${year.length === 2 ? "20" + year : year}-${monStr}-${day}`,
        );
      }
      const options = { day: "numeric", month: "short", year: "numeric" };
      return date?.toLocaleDateString("en-GB", options) || input;
    }

    // Helper: format number to Indian style with 2 decimals
    function formatToIndianDenomination(balance) {
      if (typeof balance !== "string" && typeof balance !== "number")
        return balance;
      const num = parseFloat(balance);
      if (isNaN(num)) return balance;
      return num.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }

    // Compute summary from transactions
    function computeSummary(txs) {
      if (!txs || txs.length === 0) {
        return {
          openingBalance: 0,
          totalDebits: 0,
          totalCredits: 0,
          debitCount: 0,
          creditCount: 0,
          closingBalance: 0,
        };
      }

      let first = txs[0];
      let last = txs[txs.length - 1];

      // Parse first transaction's balance and debit/credit
      let firstBalance = parseFloat(first.Balance?.replace(/,/g, "") || 0);
      let firstDebit = parseFloat(first.Debit?.replace(/,/g, "") || 0);
      let firstCredit = parseFloat(first.Credit?.replace(/,/g, "") || 0);

      // Opening balance = balance before first transaction
      let openingBalance = firstBalance;
      if (firstDebit > 0) openingBalance += firstDebit;
      else if (firstCredit > 0) openingBalance -= firstCredit;

      let totalDebits = 0,
        totalCredits = 0,
        debitCount = 0,
        creditCount = 0;
      txs.forEach((tx) => {
        let debit = parseFloat(tx.Debit?.replace(/,/g, "") || 0);
        let credit = parseFloat(tx.Credit?.replace(/,/g, "") || 0);
        if (debit > 0) {
          totalDebits += debit;
          debitCount++;
        }
        if (credit > 0) {
          totalCredits += credit;
          creditCount++;
        }
      });

      let closingBalance = parseFloat(last.Balance?.replace(/,/g, "") || 0);

      return {
        openingBalance,
        totalDebits,
        totalCredits,
        debitCount,
        creditCount,
        closingBalance,
      };
    }

    const accountInfo = req.body.accountInfo || {};
    const transactions = req.body.transactions || [];
    const summary = computeSummary(transactions);

    // Format summary numbers
    const openingBalStr = formatToIndianDenomination(summary.openingBalance);
    const totalDebitsStr = formatToIndianDenomination(summary.totalDebits);
    const totalCreditsStr = formatToIndianDenomination(summary.totalCredits);
    const closingBalStr = formatToIndianDenomination(summary.closingBalance);

    // Build transaction rows HTML
    let transactionRows = "";
    transactions.forEach((tx) => {
      const debit = tx.Debit ? formatToIndianDenomination(tx.Debit) : "";
      const credit = tx.Credit ? formatToIndianDenomination(tx.Credit) : "";
      const balance = tx.Balance ? formatToIndianDenomination(tx.Balance) : "";
      transactionRows += `
        <tr>
          <td class="center">${tx.Date || ""}</td>
          <td class="center">${tx.Date || ""}</td>
          <td class="details-cell">
            ${tx.Narration || ""} 009${Math.floor(100000000 + Math.random() * 900000000)} AT ${accountInfo.branchCode} ${accountInfo.branchName}
          </td>
          <td class="center">${"-"}</td>
          <td class="center">${debit || "-"}</td>
          <td class="center">${credit || "-"}</td>
          <td class="center">${balance}</td>
        </tr>
      `;
    });

    const lastBalance =
      formatToIndianDenomination(
        transactions?.[transactions.length - 1]?.Balance,
      ) || "0.00";

    // Prepare dynamic values
    const customerName = accountInfo.customerName || "";
    const email = accountInfo.email || "";
    const address = accountInfo.address || "";
    const dateOfStatement =
      accountInfo.dateOfStatement?.trim() ||
      new Date().toLocaleDateString("en-GB").replace(/\//g, "-");
    const clearBalance = `${lastBalance}CR`;
    const unclearedAmount = accountInfo.unclearedAmount || "0.00";
    const modBalance = accountInfo.modBalance || "0.00";
    const lien = accountInfo.lien || "0.00";
    const limit = accountInfo.limit || "0.00";
    const monthlyAvgBalance = accountInfo.monthlyAvgBalance || "0.00";
    const interestRate = accountInfo.interestRate || "0.00 % p.a.";
    const drawingPower = accountInfo.drawingPower || "0.00";
    const accountOpenDate = accountInfo.accountOpenDate || "";
    const district = accountInfo.district || "";
    const bankAddress = accountInfo.bankAddress || "";
    const branchCode = accountInfo.branchCode || "";
    const branchName = accountInfo.branchName || "";
    const branchEmail = accountInfo.branchEmail || "";
    const branchPhone = accountInfo.branchPhone || "";
    const cifNumber = accountInfo.cifNumber || "";
    const accountNumber = accountInfo.accountNumber || "";
    const accountTypeSuffix = accountInfo.accountTypeSuffix || "";
    const product = accountInfo.product || "";
    const ifscCode = accountInfo.ifscCode || "";
    const currency = accountInfo.currency || "INR";
    const accountStatus = accountInfo.accountStatus || "";
    const ckycrNumber = accountInfo.ckycrNumber || "Not Available";
    const micrCode = accountInfo.micrCode || "";
    const nomineeName = accountInfo.nomineeName || "XXXXX";
    const fromDate = accountInfo.fromDate || "";
    const toDate = accountInfo.toDate || "";

    // Direct HTML with embedded CSS
    const htmlContent = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Statement of Account</title>
    <style>
      :root {
        --purple: #5553aa;
        --accentline: #9f64d3;
        --text: #1a1a1a;
      }
      * {
        box-sizing: border-box;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
        color-adjust: exact;
      }
      html,
      body {
        margin: 0;
        padding: 0;
      }
      body {
        background: #e8e8e8;
        font-family: Arial, Helvetica, sans-serif;
        color: var(--text);
        padding: 20px 0;
      }
      body {
        padding-bottom: 30px;
      }
      .page {
        width: 210mm;
        min-height: 297mm;
        margin: 0 auto;
        background: #fff;
        border: 1px solid #d9d9d9;
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
        display: flex;
        flex-direction: column;
      }

      @page {
        size: A4;
        margin-top: -1px;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 40px !important;
      }

      @media print {
        html,
        body {
          width: 210mm;
        }
        body {
          background: #fff;
          padding: 0;
        }
        .page {
          width: 210mm !important;
          min-height: 297mm;
          margin: 0;
          border: none;
          box-shadow: none;
          page-break-after: always;
        }
      }

      /* ===== HEADER ===== */
      .header {
        background: var(--purple);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 3px 45px;
        color: #fff;
        width: 100%;
      }
      .brand {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .brand-logo {
        display: flex;
        align-items: center;
      }
      .brand-logo img {
        width: 145px;
      }
      .brand-sub {
        font-size: 16px;
        font-weight: 400;
      }
      .date-box {
        border: 1px solid #fff;
        border-radius: 8px;
        padding: 4px;
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
      }
      .date-box svg {
        width: 18px;
        height: 18px;
        stroke: #fff;
        fill: none;
        stroke-width: 1.6;
      }
      .welcome {
        text-align: right;
        line-height: 1.4;
      }
      .welcome .label {
        font-size: 13px;
      }
      .welcome .nameH {
        font-size: 13px;
      }
      .title-bar {
        padding-top: 3px;
        padding-left: 45px;
        padding-right: 45px;
      }
      .title-bar h1 {
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        margin: 0 0 12px 0;
        color: var(--text);
      }
      .title-bar hr {
        border: none;
        border-top: 1px solid #ccc;
        margin: 0;
      }

      /* ===== ACCOUNT DETAILS ===== */
      .details {
        padding: 20px 47px;
      }
      .details-grid {
        display: grid;
        grid-template-columns: 51% 49%;
        gap: 15px;
      }
      .col {
        display: flex;
        flex-direction: column;
      }
      .row {
        display: flex;
        align-items: center;
        gap: 5px;
        margin-bottom: 10px;
      }
      .icon {
        flex: 0 0 26px;
        width: 26px;
        height: 26px;
        color: var(--purple);
        margin-top: 2px;
      }
      .icon svg {
        width: 26px;
        height: 26px;
        stroke: var(--purple);
        fill: none;
        stroke-width: 1.6;
      }
      .divider {
        border-left: 2px solid var(--accentline);
        padding-left: 7px;
        flex: 1;
        padding-top: 2px;
        padding-bottom: 3px;
        height: 100%;
        display: flex;
        align-items: center;
      }
      .name {
        font-size: 16px;
      }
      .email,
      .address {
        font-size: 13px;
      }
      .bank-title {
        font-size: 18px;
        font-weight: 500;
        color: #0ebbff;
        margin: 0 0 10px 35px;
      }
      .district {
        font-size: 13px;
        margin: 0 0 12px 35px;
      }
      .field-group {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .fieldL {
        display: grid;
        grid-template-columns: 150px 1fr;
        font-size: 13px;
      }
      .fieldR {
        display: grid;
        grid-template-columns: 110px 1fr;
        font-size: 13px;
      }
      .fieldL .value::before {
        content: ": ";
      }
      .fieldR .value::before {
        content: ": ";
      }
      .fieldR .value {
        word-break: break-all;
      }
      .indented-fields {
        border-left: 2px solid var(--accentline);
        padding-left: 12px;
        display: flex;
        flex-direction: column;
        gap: 9px;
        margin-top: 4px;
      }

      /* ===== TRANSACTION TABLE ===== */
      .transactions {
        padding: 0 24px 20px 24px;
      }
      .period {
        text-align: center;
        font-size: 14px;
        margin-bottom: 30px;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid #999;
        page-break-inside: auto;
      }
      table tr {
        page-break-inside: avoid;
        break-inside: avoid;
      }
      thead th {
        background: var(--purple);
        color: #fff;
        font-size: 12.5px;
        font-weight: 500;
        padding: 8px 8px;
        text-align: center;
        border: 1px solid #776bb0;
      }
      tbody td {
        border: 1px solid #ccc;
        padding: 8px 8px;
        font-size: 12px;
        vertical-align: top;
      }
      td.center {
        text-align: center;
      }
      td.right {
        text-align: right;
      }
      .details-cell {
        line-height: 1.4;
        word-break: break-all;
      }
      tfoot td {
        background: var(--purple);
        border: 1px solid #776bb0;
        padding: 10px 0;
      }
      .summary-wrap {
        margin: 0 24px;
        border: 1px solid #ccc;
      }

      .summary-title {
        background: var(--purple);
        color: #fff;
        text-align: center;
        padding: 8px 8px;
        font-size: 14px;
        font-weight: 100;
      }

      .summary-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 10.5px;
      }

      .summary-table thead th {
        background: white;
        color: #1a1a1a;
        padding: 5px 6px;
        border: 1px solid #ccc;
        text-align: center;
        font-weight: 100;
        font-size: 15px;
      }

      .summary-table tbody td {
        background: #fff;
        color: #1a1a1a;
        padding: 6px 6px;
        border: 1px solid #ccc;
        text-align: center;
        font-size: 15px;
      }

      .disc {
        margin: 0 24px;
        font-size: 9.5px;
        color: #222;
        line-height: 1.7;
      }

      .disc ul {
        margin-left: -22px;
      }

      .disc li {
        margin-left: 1px;
        margin-bottom: 2px;
      }

      @media screen and (max-width: 900px) {
        .details-grid {
          grid-template-columns: 1fr;
          gap: 30px;
        }
        .field {
          grid-template-columns: 160px 1fr;
        }
        .header {
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }
        .welcome {
          text-align: left;
        }
      }

      /* Print always keeps the fixed A4 two-column layout regardless of viewport */
      @media print {
        .details-grid {
          grid-template-columns: 1fr 1fr !important;
          gap: 36px !important;
        }
        .field {
          grid-template-columns: 150px 1fr !important;
        }
        .header {
          flex-direction: row !important;
          align-items: center !important;
        }
        .welcome {
          text-align: right !important;
        }
      }
    </style>
  </head>
  <body>
    <div class="page">
      <!-- ===== HEADER ===== -->
      <div class="header">
        <div class="brand">
          <div class="brand-logo">
            <img
              src="data:image/png;base64,${icons.sbilogo}"
              />
          </div>
          <div class="brand-sub">Account Summary</div>
        </div>

        <div class="date-box">
          <img
            height="22"
            src="data:image/png;base64,${icons.calendarWhite}"
          />
          <span>As on&nbsp; ${dateOfStatement}</span>
        </div>

        <div class="welcome">
          <div class="label">Welcome:</div>
          <div class="nameH">Mr. GURAVA REDDY GOLLAPALLI</div>
        </div>
      </div>

      <div class="title-bar">
        <h1>STATEMENT OF ACCOUNT</h1>
        <hr />
      </div>

      <!-- ===== ACCOUNT DETAILS ===== -->
      <div class="details">
        <div class="details-grid">
          <!-- LEFT COLUMN -->
          <div class="col">
            <div class="row">
              <div class="icon">
                <img height="22" src="data:image/png;base64,${icons.contact}" />
              </div>
              <div class="divider">
                <div class="name">${customerName}</div>
              </div>
            </div>

            <div class="row">
              <div class="icon">
                <img height="22" src="data:image/png;base64,${icons.mail}" />
              </div>
              <div class="divider">
                <div class="email">${email}</div>
              </div>
            </div>

            <div class="row">
              <div class="icon">
                <img height="22" src="data:image/png;base64,${icons.location}" />
              </div>
              <div class="divider">
                <div class="address">${address}</div>
              </div>
            </div>

            <div class="row">
              <div class="icon">
                <img height="22" src="data:image/png;base64,${icons.calendar}" />
              </div>
              <div class="divider">
                <div class="field-group">
                  <div class="fieldL">
                    <div class="label">Date of Statement</div>
                    <div class="value">${dateOfStatement}</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="icon">
                <img height="22" src="data:image/png;base64,${icons.wallet}" />
              </div>
              <div class="divider">
                <div class="field-group">
                  <div class="fieldL">
                    <div class="label">Clear Balance</div>
                    <div class="value">${clearBalance}</div>
                  </div>
                  <div class="fieldL">
                    <div class="label">Uncleared Amount</div>
                    <div class="value">${unclearedAmount}</div>
                  </div>
                  <div class="fieldL">
                    <div class="label">+MOD Bal</div>
                    <div class="value">${modBalance}</div>
                  </div>
                  <div class="fieldL">
                    <div class="label">Lien</div>
                    <div class="value">${lien}</div>
                  </div>
                  <div class="fieldL">
                    <div class="label">Limit</div>
                    <div class="value">${limit}</div>
                  </div>
                  <div class="fieldL">
                    <div class="label">Monthly Avg Balance</div>
                    <div class="value">${monthlyAvgBalance}</div>
                  </div>
                  <div class="fieldL">
                    <div class="label">Interest Rate</div>
                    <div class="value">${interestRate}</div>
                  </div>
                  <div class="fieldL">
                    <div class="label">Drawing Power</div>
                    <div class="value">${drawingPower}</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="icon">
                <img height="22" src="data:image/png;base64,${icons.bank}" />
              </div>
              <div class="divider">
                <div class="fieldL">
                  <div class="label">Account open Date</div>
                  <div class="value">${accountOpenDate}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- RIGHT COLUMN -->
          <div class="col">
            <div class="bank-title">State Bank of India</div>
            <div class="district">${district}</div>

            <div class="row">
              <div class="icon">
                <img height="22" src="data:image/png;base64,${icons.location}" />
              </div>
              <div class="divider">
                <div class="address">${bankAddress}</div>
              </div>
            </div>

            <div class="row">
              <div class="icon">
                <img height="22" src="data:image/png;base64,${icons.bank}" />
              </div>
              <div class="divider">
                <div class="field-group">
                  <div class="fieldR">
                    <div class="label">Branch Code</div>
                    <div class="value">${branchCode}</div>
                  </div>
                  <div class="fieldR">
                    <div class="label">Branch Name</div>
                    <div class="value">${branchName}</div>
                  </div>
                  <div class="fieldR">
                    <div class="label">Branch Email ID</div>
                    <div class="value">${branchEmail}</div>
                  </div>
                  <div class="fieldR">
                    <div class="label">Branch Phone</div>
                    <div class="value">${branchPhone}</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="icon">
                <img height="22" src="data:image/png;base64,${icons.document}" />
              </div>
              <div class="divider">
                <div class="field-group">
                  <div class="fieldR">
                    <div class="label">CIF Number</div>
                    <div class="value">${cifNumber}</div>
                  </div>
                  <div class="fieldR">
                    <div class="label">Account Number</div>
                    <div class="value">${accountNumber}${accountTypeSuffix ? " (" + accountTypeSuffix + ")" : ""}</div>
                  </div>
                  <div class="fieldR">
                    <div class="label">Product</div>
                    <div class="value" style="font-size: 12px">${product}</div>
                  </div>
                  <div class="fieldR">
                    <div class="label">IFSC Code</div>
                    <div class="value">${ifscCode}</div>
                  </div>
                  <div class="fieldR">
                    <div class="label">Currency</div>
                    <div class="value">${currency}</div>
                  </div>
                  <div class="fieldR">
                    <div class="label">Account Status</div>
                    <div class="value">${accountStatus}</div>
                  </div>
                  <div class="fieldR">
                    <div class="label">CKYCR Number</div>
                    <div class="value">${ckycrNumber}</div>
                  </div>
                  <div class="fieldR">
                    <div class="label">MICR Code</div>
                    <div class="value">${micrCode}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="icon">
                <img height="22" src="data:image/png;base64,${icons.user_plus}" />
              </div>
              <div class="divider">
                <div class="fieldR">
                  <div class="label">Nominee Name</div>
                  <div class="value">${nomineeName}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== TRANSACTION TABLE ===== -->
      <div class="transactions">
        <div class="period">
          <span>Statement From&nbsp;&nbsp;&nbsp;: </span>${fromDate.replace(/\//g, "-")} to ${toDate.replace(/\//g, "-")}
        </div>

        <table>
          <thead>
            <tr>
              <th style="width: 9%">Value Date</th>
              <th style="width: 9%">Post Date</th>
              <th>Details</th>
              <th style="width: 9%">Ref No/<br />Cheque No</th>
              <th style="width: 9%">₹ Debit</th>
              <th style="width: 9%">₹ Credit</th>
              <th style="width: 10%">Balance</th>
            </tr>
          </thead>
          <tbody>
            ${transactionRows}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div style="height: 22px"></div>

      <div class="summary-wrap">
        <div class="summary-title">
          Statement Summary &nbsp;: ${fromDate.replace(/\//g, "-")} To ${toDate.replace(/\//g, "-")}
        </div>
        <table class="summary-table">
          <thead>
            <tr>
              <th>Brought Forward (&#8377;)</th>
              <th>Dr Count</th>
              <th>Cr Count</th>
              <th>Total Debits (&#8377;)</th>
              <th>Total Credits(&#8377;)</th>
              <th>Closing Balance (&#8377;)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${openingBalStr}</td>
              <td>${summary.debitCount}</td>
              <td>${summary.creditCount}</td>
              <td>${totalDebitsStr}</td>
              <td>${totalCreditsStr}</td>
              <td>${closingBalStr}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="disc">
        <ul>
          <li>
            Please do not share your ATM, Debit/Credit Card number, PIN
            (Personal Identification number ), OTP (One-Time Password), Username
            or Password with anyone via email, SMS, phone call, or any other
            medium. Bank never asks for such information.
          </li>
          <li>
            If your account is operated by a Power of Attorney holder, please
            review the transactions with extra care.
          </li>
          <li>
            This is a computer generated statement and does not require a
            signature.
          </li>
        </ul>
      </div>
    </div>
  </body>
</html>
`;

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
      // preferCSSPageSize: true,
      margin: {
        top: "15mm",
        right: "13mm",
        bottom: "30mm",
        left: "13mm",
      },
      displayHeaderFooter: true,
      headerTemplate: `<div></div>`,
      footerTemplate: `
        <div style="width:100%; text-align:center; font-size:13px; color:#444;">
          Page no. <span class="pageNumber"></span>
        </div>
      `,
    });

    await browser.close();

    let outputPdfBuffer = pdfBuffer;

    if (accountInfo.password?.trim()) {
      const pdfDoc = await PDFDocument.load(pdfBuffer);

      pdfDoc.encrypt({
        userPassword: accountInfo.password,
        ownerPassword: accountInfo.password,
      });

      outputPdfBuffer = Buffer.from(await pdfDoc.save());
    }

    const now = new Date();

    const date =
      String(now.getDate()).padStart(2, "0") +
      String(now.getMonth() + 1).padStart(2, "0") +
      now.getFullYear();

    const time =
      String(now.getHours()).padStart(2, "0") +
      String(now.getMinutes()).padStart(2, "0") +
      String(now.getSeconds()).padStart(2, "0");

    const fileName = `AccountStatement_${date}_${time}.pdf`;

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);

    res.send(outputPdfBuffer);
  } catch (error) {
    res.status(500).json({ error: `Internal server error-${error}` });
  }
}

router.post("/generate-sbi-statement", generateSbiStatement);

async function createSbiStatementPdf(accountInfoPayload, transactionList) {
  return new Promise((resolve, reject) => {
    const fakeRes = {
      setHeader() {},
      send(pdfBuffer) {
        resolve(pdfBuffer);
      },
      status(statusCode) {
        this.statusCode = statusCode;
        return this;
      },
      json(payload) {
        reject(
          new Error(
            payload?.error ||
              `Failed to generate statement PDF (${this.statusCode || 500})`,
          ),
        );
      },
    };

    Promise.resolve(
      generateSbiStatement(
        {
          body: {
            accountInfo: accountInfoPayload,
            transactions: transactionList,
          },
        },
        fakeRes,
      ),
    ).catch(reject);
  });
}

router.post("/sbi-download-statements", async (req, res) => {
  const tempRoot = await fs.mkdtemp(path.join(os.tmpdir(), "sbi-statements-"));

  try {
    const { accountInfo, transactions, fromDate, toDate } = req.body || {};
    let isFirstCall = true;

    if (
      !accountInfo ||
      !Array.isArray(transactions) ||
      transactions.length === 0
    ) {
      res.status(400).json({
        error: "accountInfo and transactions are required",
      });
      return;
    }

    const parsedFromDate = parseDateInput(fromDate);

    if (!parsedFromDate || Number.isNaN(parsedFromDate.getTime())) {
      res.status(400).json({
        error: "fromDate is required in a valid date format",
      });
      return;
    }

    const endDate = toDate ? parseDateInput(toDate) : new Date();
    endDate.setHours(23, 59, 59, 999);

    if (parsedFromDate > endDate) {
      res.status(400).json({
        error: "fromDate cannot be in the future",
      });
      return;
    }

    const sortedTransactions = [...transactions].sort((first, second) => {
      return parseDateInput(first.Date) - parseDateInput(second.Date);
    });

    const dateRanges = getDateRanges(parsedFromDate, endDate);
    const pdfPaths = [];
    const accountNameSlug = sanitizeFileName(
      accountInfo.customerName || "account",
    );

    for (const range of dateRanges) {
      const rangeStart = new Date(range.from);
      const rangeEnd = getEndOfDay(range.to);

      const yearlyTransactions = sortedTransactions.filter((transaction) => {
        const transactionDate = parseDateInput(transaction.Date);
        return transactionDate >= rangeStart && transactionDate <= rangeEnd;
      });

      const statementAccountInfo = {
        ...accountInfo,
        fromDate: formatSlashDate(range.from),
        toDate: formatSlashDate(range.to),
      };

      const delay = isFirstCall ? 0 : Math.floor(Math.random() * 6000) + 10000;
      await sleep(delay);
      isFirstCall = false;

      const pdfBuffer = await createSbiStatementPdf(
        statementAccountInfo,
        yearlyTransactions,
      );

      const formatDatePart = (date) => {
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, "0");
        const dd = String(date.getDate()).padStart(2, "0");

        return `${yyyy}${mm}${dd}`;
      };

      const currentDateTime = new Date()
        .toString()
        .replaceAll(":", "_")
        .replaceAll(" ", "_");

      const pdfFileName = `Account_Statement_${formatDatePart(rangeStart)}_${formatDatePart(rangeEnd)}_${currentDateTime}.pdf`;

      const pdfPath = path.join(tempRoot, pdfFileName);

      await fs.writeFile(pdfPath, pdfBuffer);
      pdfPaths.push(pdfPath);
    }

    const zipFileName = `${accountNameSlug}-statements.zip`;
    const zipPath = path.join(tempRoot, zipFileName);
    const zipResult = spawnSync("zip", ["-j", zipPath, ...pdfPaths], {
      encoding: "utf8",
    });

    if (zipResult.status !== 0) {
      throw new Error(zipResult.stderr || "Unable to create statements zip");
    }

    const zipBuffer = await fs.readFile(zipPath);

    res.setHeader("Content-Type", "application/zip");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${zipFileName}"`,
    );
    res.send(zipBuffer);
  } catch (error) {
    res.status(500).json({ error: `Internal server error - ${error.message}` });
  } finally {
    await fs.rm(tempRoot, { recursive: true, force: true });
  }
});

const statementUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 25 * 1024 * 1024 },
});

router.post(
  "/sbi-extract-statement",
  statementUpload.single("file"),
  async (req, res) => {
    try {
      if (!req.file) {
        res
          .status(400)
          .json({ error: "A PDF file is required (field name: file)" });
        return;
      }

      const result = await extractSbiAccountInfo(
        req.file.buffer,
        req.body?.password,
        req.body?.details || {},
      );

      res.json(result);
    } catch (error) {
      if (
        error.code === "PASSWORD_REQUIRED" ||
        error.code === "INVALID_PASSWORD" ||
        error.code === "INVALID_PDF" ||
        error.code === "INVALID_DETAILS"
      ) {
        res.status(400).json({ error: error.message, code: error.code });
        return;
      }

      res
        .status(500)
        .json({ error: `Internal server error - ${error.message}` });
    }
  },
);

module.exports = router;
