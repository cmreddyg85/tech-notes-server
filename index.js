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
        
        // Create a PDF document
        const doc = new PDFDocument({ margin: 30 });
        
        // Set response headers
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=SBI_Statement_${accountInfo.accountNumber}.pdf`);
        
        // Pipe the PDF to the response
        doc.pipe(res);
        
        // Add SBI logo (you would need the actual logo file)
        // doc.image('sbi-logo.png', 50, 45, { width: 50 });
        
        // Set font and add header
        doc.font('Helvetica-Bold')
           .fontSize(14)
           .fillColor('#004aad') // SBI blue
           .text('STATE BANK OF INDIA', { align: 'center' })
           .moveDown(0.5);
        
        // Add account statement title
        doc.fontSize(12)
           .text('Account Statement', { align: 'center', underline: true })
           .moveDown(1);
        
        // Add account information
        doc.font('Helvetica')
           .fontSize(10)
           .fillColor('black')
           .text(`Account Name : ${accountInfo.accountName}`);
        
        doc.text(`Address : ${accountInfo.addressLine1}`);
        doc.text(`          ${accountInfo.addressLine2}`);
        doc.text(`          ${accountInfo.addressLine3}`);
        doc.text(`          ${accountInfo.addressLine4}`);
        doc.moveDown(0.5);
        
        doc.text(`Date : ${accountInfo.statementDate}`);
        doc.text(`Account Number : ${accountInfo.accountNumber}`);
        doc.text(`Account Description : ${accountInfo.accountDescription}`);
        doc.text(`Branch : ${accountInfo.branch}`);
        doc.text(`Drawing Power : ${accountInfo.drawingPower}`);
        doc.text(`Interest Rate(% p.a.) : ${accountInfo.interestRate}`);
        doc.text(`MOD Balance : ${accountInfo.modBalance}`);
        doc.text(`CIF No. : ${accountInfo.cifNumber}`);
        doc.text(`CKYCR Number : ${accountInfo.ckycrNumber}`);
        doc.text(`IFS Code : ${accountInfo.ifsCode}`);
        doc.text(`(Indian Financial System)`);
        doc.text(`MICR Code : ${accountInfo.micrCode}`);
        doc.text(`(Magnetic Ink Character Recognition)`);
        doc.text(`Nomination Registered : ${accountInfo.nomination}`);
        doc.text(`Balance as on ${accountInfo.balanceDate} : ${accountInfo.openingBalance}`);
        doc.moveDown(1);
        
        // Add statement period
        doc.font('Helvetica-Bold')
           .text(`Account Statement from ${accountInfo.startDate} to ${accountInfo.endDate}`)
           .moveDown(1);
        
        // Create transaction table
        const table = {
            headers: [
                'Txn Date', 
                'Value Date', 
                'Description', 
                'Ref No./Cheque No.', 
                'Debit', 
                'Credit', 
                'Balance'
            ],
            rows: transactions.map(txn => [
                txn.txnDate,
                txn.valueDate,
                txn.description,
                txn.reference,
                txn.debit,
                txn.credit,
                txn.balance
            ])
        };
        
        // Draw table
        drawTable(doc, table);
        doc.moveDown(2);
        
        // Add security notice
        doc.font('Helvetica')
           .fontSize(9)
           .text('Please do not share your ATM, Debit/Credit card number, PIN (Personal Identification Number) and OTP (One Time Password) with anyone over mail, SMS, phone call or any other media. Bank never asks for such information.')
           .moveDown(1);
        
        // Add footer
        doc.font('Helvetica-Oblique')
           .text('**This is a computer generated statement and does not require a signature.', { align: 'center' });
        
        // Finalize the PDF
        doc.end();
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).json({ error: 'Failed to generate PDF' });
    }
});

// Helper function to draw a table
function drawTable(doc, table) {
    const tableTop = doc.y;
    const colWidths = [70, 70, 150, 100, 50, 50, 70];
    const rowHeight = 20;
    const cellPadding = 5;
    
    // Draw headers
    doc.font('Helvetica-Bold');
    let x = doc.x;
    table.headers.forEach((header, i) => {
        doc.rect(x, tableTop, colWidths[i], rowHeight)
           .fillAndStroke('#e6e6e6', '#000000');
        doc.fillColor('black')
           .text(header, x + cellPadding, tableTop + cellPadding, {
               width: colWidths[i] - cellPadding * 2,
               align: 'left'
           });
        x += colWidths[i];
    });
    
    // Draw rows
    doc.font('Helvetica');
    table.rows.forEach((row, rowIndex) => {
        x = doc.x;
        const y = tableTop + (rowIndex + 1) * rowHeight;
        
        row.forEach((cell, cellIndex) => {
            doc.rect(x, y, colWidths[cellIndex], rowHeight)
               .stroke('#000000');
            doc.fillColor('black')
               .text(cell || '', x + cellPadding, y + cellPadding, {
                   width: colWidths[cellIndex] - cellPadding * 2,
                   align: 'left'
               });
            x += colWidths[cellIndex];
        });
    });
}

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
