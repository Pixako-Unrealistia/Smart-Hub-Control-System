import { Request, Response } from 'express';
import { createMeter } from '../models/createMeterModel';
import { createConfig } from '../models/createConfigModel'; // Import the config model

export const createMeterHandler = async (req: Request, res: Response) => {
  try {
    // Create the meter first
    const newMeter = await createMeter(req.body);
    
    // Define default config for the meter
    const defaultConfig = {
      max_voltage: 220,
      firmware_version: '1.0.0'
    };

    // Automatically set the meter configuration
    const newConfig = await createConfig(newMeter.id, defaultConfig);

    res.status(201).json({ meter: newMeter, config: newConfig });  // Respond with both the meter and config
  } catch (error) {
    console.error('Error creating meter:', error);  // Log the error
    res.status(500).json({ message: (error as Error).message });
  }
};
