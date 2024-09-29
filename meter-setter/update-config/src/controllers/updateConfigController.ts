import { Request, Response } from 'express';
import updateConfigService from '../services/updateConfigService';

export const updateConfig = async (req: Request, res: Response) => {
  const { config_id } = req.params;
  const { config } = req.body;

  try {
    const updatedConfig = await updateConfigService.updateConfig(config_id, config);
    res.status(200).json(updatedConfig);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update config', error: (error as Error).message });
  }
};
