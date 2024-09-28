//src/controllers/hubController.ts
import { Request, Response } from 'express';
import hubService from '../services/hubService';
import logger from '../utils/logger';  // Make sure you have a logger utility

export const addHub = async (req: Request, res: Response) => {
  const { user_id, hub_name, location } = req.body;
  try {
    const newHub = await hubService.addHub(user_id, hub_name, location);
    res.status(201).json(newHub);
  } catch (error) {
    // Log the error for debugging
    logger.error('Error adding hub:', error);

    // Return the error message in the response
    const err = error as Error;
    res.status(500).json({ message: 'Failed to add hub', error: err.message || err });
  }
};

export const getHubsForUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const hubs = await hubService.getHubsForUser(Number(userId));
    if (hubs.length === 0) {
      return res.status(404).json({ message: `No hubs found for user with ID ${userId}` });
    }
    res.status(200).json(hubs);
  } catch (error) {
    logger.error('Error fetching hubs for user:', error);
    const err = error as Error;
    res.status(500).json({ message: 'Failed to fetch hubs', error: err.message || err });
  }
};

export const updateHub = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { hub_name, location, is_online } = req.body;

  try {
    const updatedHub = await hubService.updateHub(Number(id), hub_name, location, is_online);
    
    if (!updatedHub) {
      return res.status(404).json({ message: `Hub with ID ${id} not found` });
    }

    res.status(200).json(updatedHub);
  } catch (error) {
    logger.error('Error updating hub:', error);
    const err = error as Error;
    res.status(500).json({ message: 'Failed to update hub', error: err.message || err });
  }
};

export const deleteHub = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedHub = await hubService.deleteHub(Number(id));

    if (!deletedHub) {
      return res.status(404).json({ message: `Hub with ID ${id} not found` });
    }

    res.status(200).json({ message: 'Hub deleted successfully', deletedHub });
  } catch (error) {
    logger.error('Error deleting hub:', error);
    const err = error as Error;
    res.status(500).json({ message: 'Failed to delete hub', error: err.message || err });
  }
};
