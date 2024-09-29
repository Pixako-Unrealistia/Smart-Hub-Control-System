import { updateHubStatusInDb } from '../models/setHubStatusModel';

export const updateHubStatus = async (hubId: string, is_online: boolean) => {
  return await updateHubStatusInDb(hubId, is_online);
};

export default {
  updateHubStatus,
};
