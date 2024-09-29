import db from '../utils/db';

export const getConfig = async (meter_id: string) => {
  const result = await db.query(
    'SELECT * FROM meter_config WHERE meter_id = $1',
    [meter_id]
  );
  return result.rows;
};

export default {
  getConfig,
};
