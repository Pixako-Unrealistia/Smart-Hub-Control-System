import express from 'express';
import { updateConfig } from '../controllers/updateConfigController';

const router = express.Router();

router.put('/configs/:config_id', updateConfig);

export default router;
