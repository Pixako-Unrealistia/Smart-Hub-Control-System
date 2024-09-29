import { findHubsByUser } from '../models/getHubModel';

const getHubsForUser = async (userId: number) => {
  return await findHubsByUser(userId);
};

export default {
  getHubsForUser,
};
