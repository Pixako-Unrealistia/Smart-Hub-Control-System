import { createHub } from '../models/createHubModel';

const addHub = async (user_id: number, hub_name: string, location: string, p0: any) => {
  try {
    const newHub = await createHub(user_id, hub_name, location);
    return newHub;
  } catch (error) {
    throw new Error(`Error adding hub: ${error.message}`);
  }
};

export default {
  addHub,
};
