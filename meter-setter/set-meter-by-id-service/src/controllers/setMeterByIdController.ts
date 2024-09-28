import { Request, Response } from 'express';
import setMeterByIdService from '../services/setMeterByIdService';

export const setMeterById = async (req: Request, res: Response) => {
  const { meterId } = req.params;
  const { state } = req.body;

  try {
    await setMeterByIdService(Number(meterId), state);
    res.status(200).json({ message: `Meter ${meterId} set to ${state ? 'on' : 'off'}.` });
  } catch (error) {
    res.status(500).json({ message: `Failed to set meter ${meterId}`, error: (error as Error).message });
  }
};
