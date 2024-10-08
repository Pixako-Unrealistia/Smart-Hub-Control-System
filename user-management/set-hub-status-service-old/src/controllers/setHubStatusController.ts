import { Request, Response } from 'express';
import setHubStatusService from '../services/setHubStatusService';


export const setHubStatus = async (req: Request, res: Response) => {
  const { hubId } = req.params;
  const { is_online } = req.body; // `is_online` is passed in the body (true/false)

  try {
    const updatedHub = await setHubStatusService.updateHubStatus(hubId, is_online);

    if (updatedHub) {
      return res.status(200).json({ message: 'Hub status updated successfully', updatedHub });
    }

    res.status(404).json({ message: `Hub with ID ${hubId} not found` });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update hub status', error: (error as Error).message });
  }
};
