import express from 'express';
import { deleteConfig } from '../controllers/deleteConfigController';

const router = express.Router();

router.delete('/configs/:config_id', deleteConfig);

export default router;
