import express, { Request, Response } from 'express';
import { createHub } from '../controllers/createHubController';

const router = express.Router();

router.post('/hubs', async (req: Request, res: Response) => {
  await createHub(req, res);
});

export default router;