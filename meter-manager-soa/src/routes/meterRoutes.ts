//routes/meterRoutes.ts
import express from 'express';
import {
  createMeterHandler,
  getMetersByHubIdHandler,
  updateMeterHandler,
  deleteMeterHandler,
} from '../controllers/meterController';

const router = express.Router();

// Routes for meter operations
router.post('/meters', createMeterHandler);               // Create meter
router.get('/meters/hub/:hubId', getMetersByHubIdHandler); // Get meters by hub ID
router.put('/meters/:meterId', updateMeterHandler);       // Update meter
router.delete('/meters/:meterId', deleteMeterHandler);    // Delete meter

export default router;
