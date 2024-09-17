import PDFDocument from 'pdfkit';
import { Transaction } from '../models/transaction'; 

export const generatePDF = async (transactions: Transaction[]) => {
  const doc = new PDFDocument();

  const filename = 'transaction_report.pdf';


  doc.fontSize(20).text('Relatório de Transações', { align: 'center' });


  doc.moveDown();
  transactions.forEach(transaction => {
    doc
      .fontSize(12)
      .text(`Data: ${transaction.date}`)
      .text(`Descrição: ${transaction.description}`)
      .text(`Categoria: ${transaction.category}`)
      .text(`Forma de pagamento: ${transaction.paymentMethod}`)
      .text(`Valor: R$${transaction.value}`)
      .text(`Tipo de gasto: ${transaction.expenseType}`)
      .text(`Tipo de transação: ${transaction.transactionType}`)
      .text(`Saldo acumulado: R$${transaction.accumulatedBalance}`)
      .text(`Observações: ${transaction.observations}`)
      .moveDown();
  });

  doc.end();

  return doc;
};
