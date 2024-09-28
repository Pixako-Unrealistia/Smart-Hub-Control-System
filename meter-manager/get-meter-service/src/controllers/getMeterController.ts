import { Request, Response } from 'express';
import { getMetersByHubId } from '../models/getMeterModel';

export const getMetersByHubIdHandler = async (req: Request, res: Response) => {
  try {
    const meters = await getMetersByHubId(req.params.hubId);
    res.status(200).json(meters);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
