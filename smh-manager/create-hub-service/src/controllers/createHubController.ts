import { Request, Response } from 'express';
import createHubService from '../services/createHubService';

export const createHub = async (req: Request, res: Response) => {
    const { user_id, hub_name, location, is_online } = req.body;
  
    // Input validation
    if (!user_id || !hub_name || !location) {
      return res.status(400).json({ message: 'Missing required fields: user_id, hub_name, or location.' });
    }
  
    try {
      // Default `is_online` to false if not provided
      const newHub = await createHubService.addHub(user_id, hub_name, location, is_online || false);
      res.status(201).json(newHub);
    } catch (error) {
      console.error('Error adding hub:', error);
      res.status(500).json({ message: 'Failed to add hub', error: (error as Error).message });
    }
  };
  