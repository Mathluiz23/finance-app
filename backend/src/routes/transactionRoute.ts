import { Router } from 'express';
import { createTransaction, getTransactions } from '../controllers/transactionController';

const router = Router();

router.post('/transactions', createTransaction);
router.get('/transactions', getTransactions);

export default router;
