import db from '../utils/db';

export const deleteConfig = async (config_id: string) => {
  const result = await db.query(
    'DELETE FROM meter_config WHERE id = $1',
    [config_id]
  );
  return result.rowCount;
};

export default {
  deleteConfig,
};
