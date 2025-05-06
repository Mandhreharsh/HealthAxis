import nodemailer from 'nodemailer';
import pdfkit from 'pdfkit';
import { Prescription } from '../models/Prescription.js';
import PDFDocument from 'pdfkit';
import 'dotenv/config';
import fs from 'fs'; 

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const generatePrescriptionPDF = (prescription) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 50 });
    const buffers = [];

    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => resolve(Buffer.concat(buffers)));

    doc.fontSize(20).fillColor('#000').text('Health', { continued: true }).fillColor('#6a5acd').text('Axis', { align: 'center' });
    doc.moveDown(0.2);
    doc.fontSize(18).fillColor('#000').text("Doctor’s Prescription Note", { align: 'center' });
    doc.moveDown();

    doc.fontSize(12).text(`Prepared by: ${prescription.doctorName}`);
    doc.text(`Email: ${prescription.doctorEmail}`);
    doc.moveDown();

    doc.fontSize(14).text('I. Patient Information', { bold: true });
    doc.moveDown(0.5);

    const patientInfo = [
      ['Patient Name', prescription.patientName],
      ['Date of Birth', prescription.dateOfBirth],
      ['Address', prescription.address],
      ['Contact Number', prescription.contactNumber],
      ['Date of Prescription', prescription.prescriptionDate],
    ];

    generateTable(doc, patientInfo, ['Field', 'Details']);
    doc.moveDown();

    doc.fontSize(14).text('II. Medication Details');
    doc.moveDown(0.5);

    const medHeader = ['Medication Name', 'Dosage', 'Frequency', 'Quantity', 'Refills'];
    const medRows = prescription.medicines.map(med => [
      med.name, med.dosage, med.frequency, med.quantity, med.refills
    ]);

    generateTable(doc, medRows, medHeader);
    doc.moveDown();

    doc.fontSize(14).text('III. Additional Information');
    doc.moveDown(0.5);
    doc.fontSize(12).text(`Doctor’s Name: ${prescription.doctorName}`);
    doc.text(`Contact Number: ${prescription.doctorContact}`);
    doc.text(`Date: ${prescription.prescriptionDate}`);

    doc.end();
  });
};

// Helper: Table Generator
const generateTable = (doc, rows, headers) => {
  const tableTop = doc.y;
  const cellPadding = 5;
  const colWidths = [150, 200, 100, 80, 60].slice(0, headers.length);
  const startX = doc.page.margins.left;

  // Header Row
  doc.font('Helvetica-Bold').fontSize(12);
  headers.forEach((header, i) => {
    doc.rect(startX + colWidths.slice(0, i).reduce((a, b) => a + b, 0), tableTop, colWidths[i], 20).stroke();
    doc.text(header, startX + colWidths.slice(0, i).reduce((a, b) => a + b, 0) + cellPadding, tableTop + cellPadding);
  });

  // Data Rows
  let y = tableTop + 20;
  doc.font('Helvetica').fontSize(12);
  rows.forEach(row => {
    row.forEach((cell, i) => {
      doc.rect(startX + colWidths.slice(0, i).reduce((a, b) => a + b, 0), y, colWidths[i], 20).stroke();
      doc.text(cell, startX + colWidths.slice(0, i).reduce((a, b) => a + b, 0) + cellPadding, y + cellPadding);
    });
    y += 20;
  });

  doc.moveDown();
};

const sendPrescription = async (req, res) => {
  const { doctorEmail, patientEmail } = req.body;

  try {
    const prescription = await Prescription.findOne({ doctorEmail }).sort({ createdAt: -1 });

    if (!prescription) {
      return res.status(404).json({ message: 'No prescription found for this doctor' });
    }

    const pdfBuffer = await generatePrescriptionPDF(prescription);

    const mailOptions = {
      from: doctorEmail,
      to: patientEmail,
      subject: `Prescription for ${prescription.patientName}`,
      text: `Hello, please find the attached prescription for ${prescription.patientName}.`,
      attachments: [
        {
          filename: 'prescription.pdf',
          content: pdfBuffer,
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Prescription sent successfully!' });

  } catch (error) {
    console.error('Error sending prescription:', error);
    res.status(500).json({ message: 'Failed to send prescription', error: error.message });
  }
};

const createPrescription = async (req, res) => {
  const { patientName, doctorName, doctorEmail, patientEmail, medicines } = req.body;

  try {
    if (!Array.isArray(medicines) || medicines.length === 0) {
      return res.status(400).json({ message: 'Medicines must be an array and cannot be empty.' });
    }

    const prescription = new Prescription({
      patientName,
      doctorName,
      doctorEmail,
      patientEmail,
      medicines,
    });

    await prescription.save();
    res.status(201).json({ message: 'Prescription created successfully!' });
  } catch (error) {
    console.error('Error creating prescription:', error);
    res.status(500).json({ message: error.message });
  }
};

export default { createPrescription, sendPrescription };
