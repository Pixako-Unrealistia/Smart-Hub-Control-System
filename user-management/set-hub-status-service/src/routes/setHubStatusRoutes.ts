import express from 'express';
import { setHubStatus } from '../controllers/setHubStatusController';

const router = express.Router();

router.put('/hubs/:hubId/status', setHubStatus); // This endpoint will handle setting the hub's online status

export default router;
