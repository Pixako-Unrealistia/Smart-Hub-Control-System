import db from '../utils/db';

export const updateMeter = async (meterId: any, meterData: { name: any; location: any; state: any; }) => {
  const { name, location, state } = meterData;
  const result = await db.query(
    'UPDATE meters SET name = $1, location = $2, state = $3, updated_at = NOW() WHERE id = $4 RETURNING *',
    [name, location, state, meterId]
  );
  return result.rows[0];
};
