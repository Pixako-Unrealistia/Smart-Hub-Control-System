import db from '../utils/db';

export const createMeter = async (meterData: { hub_id: any; meter_id: any; name: any; location: any; state: any; }) => {
  const { hub_id, meter_id, name, location, state } = meterData;
  const result = await db.query(
    'INSERT INTO meters (hub_id, meter_id, name, location, state, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, NOW(), NOW()) RETURNING *',
    [hub_id, meter_id, name, location, state]
  );
  return result.rows[0];
};
