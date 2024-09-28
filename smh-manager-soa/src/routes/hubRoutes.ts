//src/routes/hubRoutes.ts
import express from 'express';
import { addHub, getHubsForUser, updateHub, deleteHub } from '../controllers/hubController';

const router = express.Router();

router.post('/hubs', addHub);
router.get('/hubs/user/:userId', getHubsForUser);
router.put('/hubs/:id', updateHub);
router.delete('/hubs/:id', deleteHub);

export default router;
