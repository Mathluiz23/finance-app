import nodemailer from 'nodemailer';
import { generatePDF } from './pdfService';
import { Transaction } from '../models';

export const sendEmailWithPDF = async (email: string, transactions: Transaction[]) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const pdfDoc = await generatePDF(transactions);

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Relatório de Transações',
    text: 'Segue em anexo o relatório de suas transações.',
    attachments: [
      {
        filename: 'transaction_report.pdf',
        content: pdfDoc,
        contentType: 'application/pdf',
      },
    ],
  });
};
