import express from 'express';
import { createConfig } from '../controllers/createConfigController';

const router = express.Router();

router.post('/configs', createConfig);

export default router;
