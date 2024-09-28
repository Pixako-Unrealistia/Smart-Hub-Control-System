import { Request, Response } from 'express';
import deleteHubService from '../services/deleteHubService';
import logger from '../utils/logger';

export const deleteHub = async (req: Request, res: Response): Promise<Response | void> => {
  const { id } = req.params;

  try {
    const deletedHub = await deleteHubService.deleteHub(Number(id));

    if (!deletedHub) {
      return res.status(404).json({ message: `Hub with ID ${id} not found` });
    }

    return res.status(200).json({ message: 'Hub deleted successfully', deletedHub });
  } catch (error) {
    logger.error('Error deleting hub:', error);
    return res.status(500).json({ message: 'Failed to delete hub', error: (error as Error).message });
  }
};
