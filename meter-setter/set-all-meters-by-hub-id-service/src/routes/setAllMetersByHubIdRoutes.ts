import express from 'express';
import { setAllMetersByHubId } from '../controllers/setAllMetersByHubIdController';

const router = express.Router();

router.put('/hubs/:hubId/meters', setAllMetersByHubId);

export default router;
