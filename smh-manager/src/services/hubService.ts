import hubModel from '../models/hubModel';

const addHub = async (user_id: number, hub_name: string, location: string) => {
  try {
    return await hubModel.createHub(user_id, hub_name, location);
  } catch (error) {
    throw new Error(`Error while adding hub: ${error.message}`);
  }
};

const getHubsForUser = async (userId: number) => {
  try {
    return await hubModel.findHubsByUser(userId);
  } catch (error) {
    throw new Error(`Error while fetching hubs for user ${userId}: ${error.message}`);
  }
};

const updateHub = async (id: number, hub_name: string, location: string, is_online: boolean) => {
  try {
    const updatedHub = await hubModel.updateHub(id, hub_name, location, is_online);
    return updatedHub;
  } catch (error) {
    throw new Error(`Error while updating hub with ID ${id}: ${error.message}`);
  }
};
const deleteHub = async (id: number) => {
  try {
    const deletedHub = await hubModel.deleteHub(id);
    return deletedHub;
  } catch (error) {
    throw new Error(`Error while deleting hub with ID ${id}: ${error.message}`);
  }
};

export default {
  addHub,
  getHubsForUser,
  updateHub,
  deleteHub,
};
