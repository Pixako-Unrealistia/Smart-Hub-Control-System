import db from '../utils/db';

export const createConfig = async (meter_id: string, config: object) => {
  const result = await db.query(
    'INSERT INTO meter_config (meter_id, config, created_at, updated_at) VALUES ($1, $2, NOW(), NOW()) RETURNING *',
    [meter_id, JSON.stringify(config)]
  );
  return result.rows[0];
};

export default {
  createConfig,
};
