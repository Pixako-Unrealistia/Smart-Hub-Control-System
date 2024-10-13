import express from 'express';
import { createHub } from '../controllers/createHubController';

const router = express.Router();

router.post('/hubs', createHub);

export default router;
