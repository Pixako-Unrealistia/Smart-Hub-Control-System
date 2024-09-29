import { Request, Response } from 'express';
import { updateMeter } from '../models/updateMeterModel';

export const updateMeterHandler = async (req: Request, res: Response) => {
  try {
    const updatedMeter = await updateMeter(req.params.meterId, req.body);
    res.status(200).json(updatedMeter);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
