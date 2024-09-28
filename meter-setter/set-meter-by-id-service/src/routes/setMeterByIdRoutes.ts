import express from 'express';
import { setMeterById } from '../controllers/setMeterByIdController';

const router = express.Router();

router.put('/meters/:meterId', setMeterById);

export default router;
