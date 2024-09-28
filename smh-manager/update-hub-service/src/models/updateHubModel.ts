import db from '../utils/db';

export const updateHub = async (id: number, hub_name: string, location: string, is_online: boolean) => {
  const result = await db.query(
    'UPDATE smart_meter_hubs SET hub_name = $1, location = $2, is_online = $3, updated_at = NOW() WHERE id = $4 RETURNING *',
    [hub_name, location, is_online, id]
  );
  return result.rows[0];
};
