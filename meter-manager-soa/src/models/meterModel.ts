//models/meterModel.ts
import db from '../utils/db'; // Database connection utility

// Create a new meter
export const createMeter = async (meterData: { hub_id: any; meter_id: any; name: any; location: any; state: any; }) => {
  const { hub_id, meter_id, name, location, state } = meterData;
  const result = await db.query(
    'INSERT INTO meters (hub_id, meter_id, name, location, state, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, NOW(), NOW()) RETURNING *',
    [hub_id, meter_id, name, location, state]
  );
  return result.rows[0];
};

// Fetch all meters for a specific hub
export const getMetersByHubId = async (hubId: any) => {
  const result = await db.query('SELECT * FROM meters WHERE hub_id = $1', [hubId]);
  return result.rows;
};

// Update an existing meter
export const updateMeter = async (meterId: any, meterData: { name: any; location: any; state: any; }) => {
  const { name, location, state } = meterData;
  const result = await db.query(
    'UPDATE meters SET name = $1, location = $2, state = $3, updated_at = NOW() WHERE id = $4 RETURNING *',
    [name, location, state, meterId]
  );
  return result.rows[0];
};

// Delete a meter by its ID
export const deleteMeter = async (meterId: any) => {
  const result = await db.query('DELETE FROM meters WHERE id = $1 RETURNING *', [meterId]);
  return result.rows[0];
};

