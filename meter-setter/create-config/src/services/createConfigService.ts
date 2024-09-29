import createConfigModel from '../models/createConfigModel';

const createConfig = async (meter_id: string, config: object) => {
  return await createConfigModel.createConfig(meter_id, config);
};

export default {
  createConfig,
};
