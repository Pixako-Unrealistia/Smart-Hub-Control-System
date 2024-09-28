import express from 'express';
import { getHubsForUser } from '../controllers/getHubController';

const router = express.Router();

router.get('/hubs/user/:userId', getHubsForUser);

export default router;
