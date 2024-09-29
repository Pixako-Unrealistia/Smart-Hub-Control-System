import { setAllMetersByHubId } from '../models/setAllMetersByHubIdModel';

const setAllMetersByHubIdService = async (hubId: number, state: boolean) => {
  try {
    await setAllMetersByHubId(hubId, state);
  } catch (error) {
    throw new Error(`Error in service: ${error.message}`);
  }
};

export default setAllMetersByHubIdService;
