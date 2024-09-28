//src/models/hubModel.ts
import db from '../utils/db';

const createHub = async (user_id: number, hub_name: string, location: string) => {
  try {
    const result = await db.query(
      'INSERT INTO smart_meter_hubs (user_id, hub_name, location, created_at, updated_at) VALUES ($1, $2, $3, NOW(), NOW()) RETURNING *',
      [user_id, hub_name, location]
    );
    return result.rows[0];
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Database error while creating hub: ${error.message}`);
    } else {
      throw new Error('Database error while creating hub: Unknown error');
    }
  }
};

const findHubsByUser = async (userId: number) => {
  const result = await db.query('SELECT * FROM smart_meter_hubs WHERE user_id = $1', [userId]);
  return result.rows;
};

const updateHub = async (id: number, hub_name: string, location: string, is_online: boolean) => {
  const result = await db.query(
    'UPDATE smart_meter_hubs SET hub_name = $1, location = $2, is_online = $3, updated_at = NOW() WHERE id = $4 RETURNING *',
    [hub_name, location, is_online, id]
  );
  return result.rows[0];
};

const deleteHub = async (id: number) => {
  const result = await db.query('DELETE FROM smart_meter_hubs WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

export default {
  createHub,
  findHubsByUser,
  updateHub,
  deleteHub,
};
