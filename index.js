const express = require("express");
const { get, set } = require("@vercel/blob"); // Import Vercel Blob methods
const cors = require("cors");
const PDFDocument = require('pdfkit');
const bodyParser = require('body-parser');

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
app.post('/api/generate-sbi-statement', (req, res) => {
    try {
        const { accountInfo, transactions } = req.body;
        
        // Create a PDF document with precise measurements
        const doc = new PDFDocument({ 
            margin: 40,
            size: 'A4',
            layout: 'portrait',
            bufferPages: true
        });
        
        // Set response headers
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=SBI_Statement_${accountInfo.accountNumber}.pdf`);
        
        // Pipe the PDF to the response
        doc.pipe(res);

        // SBI Header with exact styling
        doc.fillColor('#004aad') // Official SBI blue
           .font('Helvetica-Bold')
           .fontSize(16)
           .text('STATE BANK OF INDIA', { 
               align: 'center',
               underline: false,
               lineGap: 5
           });

        // Account Statement title
        doc.fontSize(12)
           .text('Account Statement', { 
               align: 'center',
               underline: false,
               lineGap: 10
           });

        // Horizontal divider line
        doc.moveTo(40, doc.y)
           .lineTo(550, doc.y)
           .lineWidth(1)
           .strokeColor('#004aad')
           .stroke();

        // Account Information - precise two-column layout
        doc.moveDown(0.8);
        doc.font('Helvetica')
           .fontSize(10)
           .fillColor('black');

        const leftColX = 50;
        const rightColX = 280;
        let currentY = doc.y;

        // Function to add perfectly aligned label-value pairs
        const addInfoRow = (label, value, y) => {
            doc.text(label, leftColX, y);
            doc.text(value, rightColX, y);
            return y + 15;
        };

        // Left column items
        currentY = addInfoRow('Account Name :', accountInfo.accountName, currentY);
        doc.text('Address :', leftColX, currentY);
        doc.text(accountInfo.addressLine1, rightColX, currentY);
        currentY += 15;
        doc.text(accountInfo.addressLine2, rightColX, currentY);
        currentY += 15;
        doc.text(accountInfo.addressLine3, rightColX, currentY);
        currentY += 15;
        doc.text(accountInfo.addressLine4, rightColX, currentY);
        currentY += 20;

        // Right column items
        currentY = addInfoRow('Date :', accountInfo.statementDate, currentY);
        currentY = addInfoRow('Account Number :', accountInfo.accountNumber, currentY);
        currentY = addInfoRow('Account Description :', accountInfo.accountDescription, currentY);
        currentY = addInfoRow('Branch :', accountInfo.branch, currentY);
        currentY = addInfoRow('Drawing Power :', accountInfo.drawingPower, currentY);
        currentY = addInfoRow('Interest Rate(% p.a.) :', accountInfo.interestRate, currentY);
        currentY = addInfoRow('MOD Balance :', accountInfo.modBalance, currentY);
        currentY = addInfoRow('CIF No. :', accountInfo.cifNumber, currentY);
        currentY = addInfoRow('CKYCR Number :', accountInfo.ckycrNumber || '', currentY);
        currentY = addInfoRow('IFS Code :', accountInfo.ifsCode, currentY);
        doc.text('(Indian Financial System)', rightColX, currentY);
        currentY += 15;
        currentY = addInfoRow('MICR Code :', accountInfo.micrCode, currentY);
        doc.text('(Magnetic Ink Character Recognition)', rightColX, currentY);
        currentY += 15;
        currentY = addInfoRow('Nomination Registered :', accountInfo.nomination, currentY);
        currentY = addInfoRow(`Balance as on ${accountInfo.balanceDate} :`, accountInfo.openingBalance, currentY);
        currentY += 20;

        // Statement period with divider
        doc.font('Helvetica-Bold')
           .text(`Account Statement from ${accountInfo.startDate} to ${accountInfo.endDate}`, {
               align: 'left',
               lineGap: 10
           });

        doc.moveTo(40, doc.y)
           .lineTo(550, doc.y)
           .lineWidth(1)
           .strokeColor('#004aad')
           .stroke();

        doc.moveDown(0.5);

        // Transaction table with pixel-perfect alignment
        const tableTop = doc.y;
        const colWidths = [70, 70, 150, 100, 50, 50, 70];
        const rowHeight = 20;
        const cellPadding = 5;

        // Draw table headers with exact SBI style
        doc.font('Helvetica-Bold');
        let x = 40;
        
        // Header background
        doc.rect(x, tableTop, 510, rowHeight)
           .fill('#e6e6e6');

        // Header text
        const headers = [
            'Txn Date', 
            'Value Date', 
            'Description', 
            'Ref No./Cheque No.', 
            'Debit', 
            'Credit', 
            'Balance'
        ];
        
        headers.forEach((header, i) => {
            doc.fillColor('black')
               .text(header, x + cellPadding, tableTop + cellPadding, {
                   width: colWidths[i] - cellPadding * 2,
                   align: i >= 4 ? 'right' : 'left' // Right align for amounts
               });
            x += colWidths[i];
        });

        // Draw table rows with perfect alignment
        doc.font('Helvetica');
        transactions.forEach((row, rowIndex) => {
            x = 40;
            const y = tableTop + (rowIndex + 1) * rowHeight;
            
            // Draw cell borders
            doc.rect(x, y, 510, rowHeight)
               .stroke('#000000');

            // Draw cell content with proper alignment
            [
                row.txnDate,
                row.valueDate,
                row.description,
                row.reference,
                row.debit,
                row.credit,
                row.balance
            ].forEach((cell, cellIndex) => {
                doc.fillColor('black')
                   .text(cell || '', 
                       x + (cellIndex >= 4 ? colWidths[cellIndex] - cellPadding - doc.widthOfString(cell || '') : cellPadding), 
                       y + cellPadding, {
                           width: colWidths[cellIndex] - cellPadding * 2,
                           align: cellIndex >= 4 ? 'right' : 'left'
                       });
                x += colWidths[cellIndex];
            });
        });

        doc.moveDown(2);

        // Security notice with exact wording
        doc.font('Helvetica')
           .fontSize(9)
           .text('Please do not share your ATM, Debit/Credit card number, PIN (Personal Identification Number) and OTP (One Time Password) with anyone over mail, SMS, phone call or any other media. Bank never asks for such information.', {
               align: 'left',
               lineGap: 5,
               width: 500
           });

        // Footer with correct disclaimer
        doc.moveDown(1);
        doc.font('Helvetica-Oblique')
           .text('**This is a computer generated statement and does not require a signature.', {
               align: 'center'
           });

        // Finalize the PDF
        doc.end();
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).json({ error: 'Failed to generate PDF' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
