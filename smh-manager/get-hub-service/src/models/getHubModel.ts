import db from '../utils/db';

export const findHubsByUser = async (userId: number) => {
  const result = await db.query('SELECT * FROM smart_meter_hubs WHERE user_id = $1', [userId]);
  return result.rows;
};
