import { Router } from 'express';
import { createTransaction, getTransactions } from '../controllers/transactionController';
import { sendEmailWithPDF } from '../service/emailService';
import { Transaction } from '../models/transaction';

const router = Router();

router.post('/transactions', createTransaction);
router.get('/transactions', getTransactions);

// Rota para exportar relatório e enviar por e-mail
router.post('/transactions/export', async (req, res) => {
    const { email } = req.body;
  
    try {
      const transactions = await Transaction.findAll();
  
      // Enviar o PDF por e-mail
      await sendEmailWithPDF(email, transactions);
  
      res.status(200).json({ message: 'Relatório enviado para o e-mail.' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao enviar relatório.' });
    }
  });

export default router;




