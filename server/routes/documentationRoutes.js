import express from 'express';
import { getTableData } from '../controllers/tableController.js';

const router = express.Router();

router.get('/', getTableData);

export default router;
