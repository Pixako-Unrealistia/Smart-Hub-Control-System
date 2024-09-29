import express from 'express';
import { deleteMeterHandler } from '../controllers/deleteMeterController';

const router = express.Router();

router.delete('/meters/:meterId', deleteMeterHandler);  // DELETE route for deleting a meter

export default router;
