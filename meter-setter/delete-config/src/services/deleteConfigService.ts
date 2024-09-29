import deleteConfigModel from '../models/deleteConfigModel';

const deleteConfig = async (config_id: string) => {
  return await deleteConfigModel.deleteConfig(config_id);
};

export default {
  deleteConfig,
};
