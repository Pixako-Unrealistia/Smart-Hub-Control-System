import db from '../utils/db';

export const updateConfig = async (config_id: string, config: object) => {
  const result = await db.query(
    'UPDATE meter_config SET config = $1, updated_at = NOW() WHERE id = $2 RETURNING *',
    [JSON.stringify(config), config_id]
  );
  return result.rows[0];
};

export default {
  updateConfig,
};
