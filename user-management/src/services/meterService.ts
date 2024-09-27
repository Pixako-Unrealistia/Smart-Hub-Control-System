import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Add a meter to a hub
export async function addMeterToHub(hub_id: number, meter_id: string, display_name: string) {
  const insertQuery = `
    INSERT INTO meters (hub_id, meter_id, display_name, created_at, updated_at)
    VALUES ($1, $2, $3, NOW(), NOW())
    RETURNING id, hub_id, meter_id, display_name, state, created_at, updated_at;
  `;
  const result = await pool.query(insertQuery, [hub_id, meter_id, display_name]);
  return result.rows[0];
}

// Get all meters associated with a hub
export async function getMetersByHub(hub_id: number) {
  const selectQuery = `
    SELECT id, hub_id, meter_id, display_name, state, created_at, updated_at
    FROM meters
    WHERE hub_id = $1;
  `;
  const result = await pool.query(selectQuery, [hub_id]);
  return result.rows;
}

// Update meter state (on/off)
export async function updateMeterState(meter_id: string, state: boolean) {
  const updateQuery = `
    UPDATE meters
    SET state = $1, updated_at = NOW()
    WHERE meter_id = $2
    RETURNING id, hub_id, meter_id, display_name, state, created_at, updated_at;
  `;
  const result = await pool.query(updateQuery, [state, meter_id]);
  return result.rows[0];
}
