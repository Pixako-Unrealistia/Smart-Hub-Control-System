//controller/meterController.ts
import { Request, Response } from 'express';
import { createMeter, getMetersByHubId, updateMeter, deleteMeter } from '../services/meterService';

// Controller for creating a new meter
export const createMeterHandler = async (req: Request, res: Response) => {
  try {
    const newMeter = await createMeter(req.body);
    res.status(201).json(newMeter);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Controller for fetching meters by hub ID
export const getMetersByHubIdHandler = async (req: Request, res: Response) => {
  try {
    const meters = await getMetersByHubId(req.params.hubId);
    res.status(200).json(meters);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Controller for updating an existing meter
export const updateMeterHandler = async (req: Request, res: Response) => {
  try {
    const updatedMeter = await updateMeter(req.params.meterId, req.body);
    res.status(200).json(updatedMeter);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Controller for deleting a meter
export const deleteMeterHandler = async (req: Request, res: Response) => {
  try {
    const deletedMeter = await deleteMeter(req.params.meterId);
    res.status(200).json({ message: 'Meter deleted successfully' });
  } catch (error) {
    res.status(500).json({message: (error as Error).message});
  }
};

