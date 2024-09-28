import { updateHub } from '../models/updateHubModel';

const updateHubDetails = async (id: number, hub_name: string, location: string, is_online: boolean) => {
  return await updateHub(id, hub_name, location, is_online);
};

export default {
  updateHub: updateHubDetails,
};
