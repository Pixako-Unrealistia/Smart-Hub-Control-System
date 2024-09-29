import { deleteHub as deleteHubModel } from '../models/deleteHubModel';

const deleteHubDetails = async (id: number) => {
  return await deleteHubModel(id);  // Return the result of the deletion
};

export default {
  deleteHub: deleteHubDetails,
};
