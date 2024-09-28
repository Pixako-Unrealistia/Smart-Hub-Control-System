import { Request, Response } from 'express';
import setAllMetersByHubIdService from '../services/setAllMetersByHubIdService';


export const setAllMetersByHubId = async (req: Request, res: Response) => {
  const { hubId } = req.params;
  const { state } = req.body;

  try {
    await setAllMetersByHubIdService(Number(hubId), state);
    res.status(200).json({ message: `All meters in hub ${hubId} set to ${state ? 'on' : 'off'}.` });
  } catch (error) {
    res.status(500).json({ message: `Failed to set all meters in hub ${hubId}`, error: (error as Error).message });
  }
};
