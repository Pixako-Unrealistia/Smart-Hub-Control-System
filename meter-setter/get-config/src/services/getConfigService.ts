import getConfigModel from '../models/getConfigModel';

const getConfig = async (meter_id: string) => {
  return await getConfigModel.getConfig(meter_id);
};

export default {
  getConfig,
};
