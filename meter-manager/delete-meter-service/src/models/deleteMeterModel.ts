import db from '../utils/db';

export const deleteMeter = async (meterId: any) => {
  const result = await db.query('DELETE FROM meters WHERE id = $1 RETURNING *', [meterId]);
  return result.rows[0];
};
