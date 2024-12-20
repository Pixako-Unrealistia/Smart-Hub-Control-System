import { createHub } from '../models/createHubModel';

const addHub = async (user_id: number, hub_name: string, location: string, p0: any) => {
  try {
    const newHub = await createHub(user_id, hub_name, location);
    return newHub;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error adding hub: ${error.message}`);
    } else {
      throw new Error('An unknown error occurred while adding hub');
    }
  } 
};

export default {
  addHub,
};
