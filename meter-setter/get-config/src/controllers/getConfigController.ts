import { Request, Response } from 'express';
import getConfigService from '../services/getConfigService';

export const getConfig = async (req: Request, res: Response) => {
  const { meter_id } = req.params;

  try {
    const config = await getConfigService.getConfig(meter_id);
    res.status(200).json(config);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get config', error: (error as Error).message });
  }
};
