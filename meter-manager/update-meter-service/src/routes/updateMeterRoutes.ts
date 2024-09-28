import express from 'express';
import { updateMeterHandler } from '../controllers/updateMeterController';

const router = express.Router();

router.put('/meters/:meterId', updateMeterHandler);  // PUT route for updating a meter

export default router;
