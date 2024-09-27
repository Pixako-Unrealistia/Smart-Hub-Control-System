import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function addSmartMeterHub(user_id: number, hub_name: string) {
  const insertQuery = `
    INSERT INTO smart_meter_hubs (user_id, hub_name, created_at, updated_at)
    VALUES ($1, $2, NOW(), NOW())
    RETURNING id, user_id, hub_name, created_at, updated_at;
  `;
  const result = await pool.query(insertQuery, [user_id, hub_name]);
  return result.rows[0];
}

export async function getSmartMeterHubs(user_id: number) {
  const selectQuery = `
    SELECT id, user_id, hub_name, created_at, updated_at
    FROM smart_meter_hubs
    WHERE user_id = $1;
  `;
  const result = await pool.query(selectQuery, [user_id]);
  return result.rows;
}

export async function updateHubMeters(user_id: number, hub_id: number, meters: string[]) {
  // Assuming that the meters are stored in another table related to the hub
  // Here we would update the meters by first deleting existing meters and adding new ones.
  
  const deleteMetersQuery = `
    DELETE FROM meters WHERE hub_id = $1;
  `;
  await pool.query(deleteMetersQuery, [hub_id]);

  const insertMetersQuery = `
    INSERT INTO meters (hub_id, meter_id, created_at, updated_at)
    VALUES ($1, $2, NOW(), NOW())
  `;
  for (const meter_id of meters) {
    await pool.query(insertMetersQuery, [hub_id, meter_id]);
  }

  const updatedHub = await pool.query(
    `SELECT * FROM smart_meter_hubs WHERE id = $1 AND user_id = $2`,
    [hub_id, user_id]
  );
  return updatedHub.rows[0];
}
