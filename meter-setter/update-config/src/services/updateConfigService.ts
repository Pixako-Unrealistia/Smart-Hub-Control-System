import updateConfigModel from '../models/updateConfigModel';

const updateConfig = async (config_id: string, config: object) => {
  return await updateConfigModel.updateConfig(config_id, config);
};

export default {
  updateConfig,
};
