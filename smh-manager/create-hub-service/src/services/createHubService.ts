import { createHub } from '../models/createHubModel';

const addHub = async (user_id: number, hub_name: string, location: string) => {
  return await createHub(user_id, hub_name, location);
};

export default {
  addHub,
};
