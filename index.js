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
        
        // Create a PDF document with proper margins
        const doc = new PDFDocument({ 
            margin: 40,
            size: 'A4',
            layout: 'portrait'
        });
        
        // Set response headers
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=SBI_Statement_${accountInfo.accountNumber}.pdf`);
        
        // Pipe the PDF to the response
        doc.pipe(res);

        // Add SBI header with blue color
        doc.fillColor('#004aad') // SBI blue
           .font('Helvetica-Bold')
           .fontSize(16)
           .text('STATE BANK OF INDIA', { 
               align: 'center',
               underline: false,
               lineGap: 5
           });

        // Add account statement title
        doc.fontSize(12)
           .text('Account Statement', { 
               align: 'center',
               underline: false,
               lineGap: 10
           });

        // Add horizontal line
        doc.moveTo(40, doc.y)
           .lineTo(550, doc.y)
           .lineWidth(1)
           .strokeColor('#004aad')
           .stroke();

        // Add account information with proper spacing
        doc.moveDown(1);
        doc.font('Helvetica')
           .fontSize(10)
           .fillColor('black');

        const infoLeft = 50;
        const infoRight = 300;
        let currentY = doc.y;

        // Left column
        doc.text('Account Name :', infoLeft, currentY);
        doc.text(accountInfo.accountName, infoRight, currentY);
        currentY += 15;

        doc.text('Address :', infoLeft, currentY);
        doc.text(accountInfo.addressLine1, infoRight, currentY);
        currentY += 15;
        doc.text(accountInfo.addressLine2, infoRight, currentY);
        currentY += 15;
        doc.text(accountInfo.addressLine3, infoRight, currentY);
        currentY += 15;
        doc.text(accountInfo.addressLine4, infoRight, currentY);
        currentY += 20;

        // Right column
        doc.text('Date :', infoLeft, currentY);
        doc.text(accountInfo.statementDate, infoRight, currentY);
        currentY += 15;

        doc.text('Account Number :', infoLeft, currentY);
        doc.text(accountInfo.accountNumber, infoRight, currentY);
        currentY += 15;

        doc.text('Account Description :', infoLeft, currentY);
        doc.text(accountInfo.accountDescription, infoRight, currentY);
        currentY += 15;

        doc.text('Branch :', infoLeft, currentY);
        doc.text(accountInfo.branch, infoRight, currentY);
        currentY += 15;

        doc.text('Drawing Power :', infoLeft, currentY);
        doc.text(accountInfo.drawingPower, infoRight, currentY);
        currentY += 15;

        doc.text('Interest Rate(% p.a.) :', infoLeft, currentY);
        doc.text(accountInfo.interestRate, infoRight, currentY);
        currentY += 15;

        doc.text('MOD Balance :', infoLeft, currentY);
        doc.text(accountInfo.modBalance, infoRight, currentY);
        currentY += 15;

        doc.text('CIF No. :', infoLeft, currentY);
        doc.text(accountInfo.cifNumber, infoRight, currentY);
        currentY += 15;

        doc.text('CKYCR Number :', infoLeft, currentY);
        doc.text(accountInfo.ckycrNumber || '', infoRight, currentY);
        currentY += 15;

        doc.text('IFS Code :', infoLeft, currentY);
        doc.text(accountInfo.ifsCode, infoRight, currentY);
        currentY += 15;

        doc.text('(Indian Financial System)', infoRight, currentY);
        currentY += 15;

        doc.text('MICR Code :', infoLeft, currentY);
        doc.text(accountInfo.micrCode, infoRight, currentY);
        currentY += 15;

        doc.text('(Magnetic Ink Character Recognition)', infoRight, currentY);
        currentY += 15;

        doc.text('Nomination Registered :', infoLeft, currentY);
        doc.text(accountInfo.nomination, infoRight, currentY);
        currentY += 15;

        doc.text(`Balance as on ${accountInfo.balanceDate} :`, infoLeft, currentY);
        doc.text(accountInfo.openingBalance, infoRight, currentY);
        currentY += 25;

        // Add statement period with horizontal line
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

        // Create transaction table with proper alignment
        const tableTop = doc.y;
        const colWidths = [70, 70, 150, 100, 50, 50, 70];
        const rowHeight = 20;
        const cellPadding = 5;

        // Draw table headers with gray background
        doc.font('Helvetica-Bold');
        let x = 40;
        
        // Header row background
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
                   align: 'left'
               });
            x += colWidths[i];
        });

        // Draw table rows
        doc.font('Helvetica');
        transactions.forEach((row, rowIndex) => {
            x = 40;
            const y = tableTop + (rowIndex + 1) * rowHeight;
            
            // Draw cell borders
            doc.rect(x, y, 510, rowHeight)
               .stroke('#000000');

            // Draw cell content
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
                   .text(cell || '', x + cellPadding, y + cellPadding, {
                       width: colWidths[cellIndex] - cellPadding * 2,
                       align: cellIndex >= 4 ? 'right' : 'left' // Right align for amounts
                   });
                x += colWidths[cellIndex];
            });
        });

        doc.moveDown(2);

        // Add security notice
        doc.font('Helvetica')
           .fontSize(9)
           .text('Please do not share your ATM, Debit/Credit card number, PIN (Personal Identification Number) and OTP (One Time Password) with anyone over mail, SMS, phone call or any other media. Bank never asks for such information.', {
               align: 'left',
               lineGap: 5,
               width: 500
           });

        // Add footer
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
