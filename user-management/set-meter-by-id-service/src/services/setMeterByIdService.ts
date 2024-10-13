import { setMeterById } from '../models/setMeterByIdModel';

const setMeterByIdService = async (meterId: number, state: boolean) => {
  try {
    await setMeterById(meterId, state);
  } catch (error) {
    throw new Error(`Error in service: ${error.message}`);
  }
};

export default setMeterByIdService;
