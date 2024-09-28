import { Request, Response } from 'express';
import { deleteMeter } from '../models/deleteMeterModel';

export const deleteMeterHandler = async (req: Request, res: Response) => {
  try {
    const deletedMeter = await deleteMeter(req.params.meterId);
    res.status(200).json({ message: 'Meter deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
