import { Request, Response } from 'express';
import updateHubService from '../services/updateHubService';
import logger from '../utils/logger';

export const updateHub = async (req: Request, res: Response): Promise<Response | void> => {
  const { id } = req.params;
  const { hub_name, location, is_online } = req.body;

  try {
    const updatedHub = await updateHubService.updateHub(Number(id), hub_name, location, is_online);

    if (!updatedHub) {
      return res.status(404).json({ message: `Hub with ID ${id} not found` });
    }

    return res.status(200).json(updatedHub);
  } catch (error) {
    logger.error('Error updating hub:', error);
    return res.status(500).json({ message: 'Failed to update hub', error: (error as Error).message });
  }
};
