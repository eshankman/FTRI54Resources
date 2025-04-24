import express from 'express';
import { getCollectionData } from '../controllers/mapController.js';

const router = express.Router();

router.get('/:collection', getCollectionData);

export default router;
