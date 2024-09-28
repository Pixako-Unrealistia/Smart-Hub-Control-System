import { Request, Response } from 'express';
import { createMeter } from '../models/createMeterModel';

export const createMeterHandler = async (req: Request, res: Response) => {
  try {
    const newMeter = await createMeter(req.body);
    res.status(201).json(newMeter);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
