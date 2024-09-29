import express from 'express';
import { createMeterHandler } from '../controllers/createMeterController';

const router = express.Router();

router.post('/meters', createMeterHandler);  // POST route for creating a meter

export default router;
