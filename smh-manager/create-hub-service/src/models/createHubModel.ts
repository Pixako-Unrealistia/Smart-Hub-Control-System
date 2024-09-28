import db from '../utils/db';

export const createHub = async (user_id: number, hub_name: string, location: string) => {
  const result = await db.query(
    'INSERT INTO smart_meter_hubs (user_id, hub_name, location, created_at, updated_at) VALUES ($1, $2, $3, NOW(), NOW()) RETURNING *',
    [user_id, hub_name, location]
  );
  return result.rows[0];
};
