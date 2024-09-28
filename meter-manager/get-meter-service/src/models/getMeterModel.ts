import db from '../utils/db';

export const getMetersByHubId = async (hubId: any) => {
  const result = await db.query('SELECT * FROM meters WHERE hub_id = $1', [hubId]);
  return result.rows;
};
