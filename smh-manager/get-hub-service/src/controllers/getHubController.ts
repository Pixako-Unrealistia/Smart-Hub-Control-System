import { Request, Response } from 'express';
import getHubService from '../services/getHubService';
import logger from '../utils/logger';

export const getHubsForUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const hubs = await getHubService.getHubsForUser(Number(userId));
    res.status(200).json(hubs);
  } catch (error) {
    logger.error('Error fetching hubs:', error);
    res.status(500).json({ message: 'Failed to fetch hubs', error: (error as Error).message });
  }
};
