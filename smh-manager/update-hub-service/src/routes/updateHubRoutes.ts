import express, { Request, Response } from 'express';
import { updateHub } from '../controllers/updateHubController';

const router = express.Router();

router.put('/hubs/:id', (req: Request, res: Response) => {
  updateHub(req, res);
});

export default router;
