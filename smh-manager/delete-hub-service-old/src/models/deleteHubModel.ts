import db from '../utils/db';

export const deleteHub = async (id: number) => {
  const result = await db.query('DELETE FROM smart_meter_hubs WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];  // Ensure the result is correctly returned
};
