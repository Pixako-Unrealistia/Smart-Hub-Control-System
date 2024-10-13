import { setAllMetersByHubId } from '../models/setAllMetersByHubIdModel';

const setAllMetersByHubIdService = async (hubId: number, state: boolean) => {
    await setAllMetersByHubId(hubId, state);
};

export default setAllMetersByHubIdService;
