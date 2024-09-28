import express from 'express';
import { getMetersByHubIdHandler } from '../controllers/getMeterController';

const router = express.Router();

router.get('/meters/hub/:hubId', getMetersByHubIdHandler);  // GET route for fetching meters by hub ID

export default router;
