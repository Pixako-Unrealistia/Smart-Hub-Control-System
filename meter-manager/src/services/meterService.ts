import { createMeter, getMetersByHubId, updateMeter, deleteMeter } from '../models/meterModel';

export const createMeterService = async (meterData: { hub_id: any; meter_id: any; name: any; location: any; state: any; }) => {
  return await createMeter(meterData);
};

export const getMetersByHubIdService = async (hubId: any) => {
  return await getMetersByHubId(hubId);
};

export const updateMeterService = async (meterId: any, meterData: { name: any; location: any; state: any; }) => {
  return await updateMeter(meterId, meterData);
};

export const deleteMeterService = async (meterId: any) => {
  return await deleteMeter(meterId);
};

export { createMeter, getMetersByHubId, updateMeter, deleteMeter};

