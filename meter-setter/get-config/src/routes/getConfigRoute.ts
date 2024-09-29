import express from 'express';
import { getConfig } from '../controllers/getConfigController';

const router = express.Router();

router.get('/configs/:meter_id', getConfig);

export default router;
