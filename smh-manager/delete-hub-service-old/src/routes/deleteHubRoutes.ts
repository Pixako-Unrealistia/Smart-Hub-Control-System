import express, { Request, Response } from 'express';
import { deleteHub } from '../controllers/deleteHubController';

const router = express.Router();

router.delete('/hubs/:id', async (req: Request, res: Response) => {
  await deleteHub(req, res);  // Await the deleteHub function to properly handle the promise
});

export default router;
