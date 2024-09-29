import { Request, Response } from 'express';
import deleteConfigService from '../services/deleteConfigService';

export const deleteConfig = async (req: Request, res: Response) => {
  const { config_id } = req.params;

  try {
    await deleteConfigService.deleteConfig(config_id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete config', error: (error as Error).message });
  }
};
