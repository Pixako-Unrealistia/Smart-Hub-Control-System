import db from '../utils/db';

export const updateHubStatusInDb = async (hubId: string, is_online: boolean) => {
  const result = await db.query(
    'UPDATE smart_meter_hubs SET is_online = $1, updated_at = NOW() WHERE id = $2 RETURNING *',
    [is_online, hubId]
  );
  return result.rows[0]; // Return the updated hub
};
