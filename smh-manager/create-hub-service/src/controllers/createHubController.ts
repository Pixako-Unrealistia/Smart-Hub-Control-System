import { Request, Response } from 'express';
import createHubService from '../services/createHubService';
import logger from '../utils/logger';

export const createHub = async (req: Request, res: Response) => {
  const { user_id, hub_name, location } = req.body;
  try {
    const newHub = await createHubService.addHub(user_id, hub_name, location);
    res.status(201).json(newHub);
  } catch (error) {
    logger.error('Error adding hub:', error);
    res.status(500).json({ message: 'Failed to add hub', error: (error as Error).message });
  }
};
