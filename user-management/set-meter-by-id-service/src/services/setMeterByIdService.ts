import { setMeterById } from '../models/setMeterByIdModel';

const setMeterByIdService = async (meterId: number, state: boolean) => {

    await setMeterById(meterId, state);
  
};

export default setMeterByIdService;
