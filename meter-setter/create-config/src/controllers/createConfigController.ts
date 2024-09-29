import { Request, Response } from 'express';
import createConfigService from '../services/createConfigService';

export const createConfig = async (req: Request, res: Response) => {
  const { meter_id, config } = req.body;

  try {
    const newConfig = await createConfigService.createConfig(meter_id, config);
    res.status(201).json(newConfig);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create config', error: (error as Error).message });
  }
};
