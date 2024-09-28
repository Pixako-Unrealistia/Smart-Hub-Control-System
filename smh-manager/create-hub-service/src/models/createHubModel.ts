import db from '../utils/db';

export const createHub = async (user_id: number, hub_name: string, location: string, is_online: boolean = false) => {
  try {
    console.log("Executing DB query with data:", { user_id, hub_name, location, is_online });

    const result = await db.query(
      'INSERT INTO smart_meter_hubs (user_id, hub_name, location, is_online, created_at, updated_at) VALUES ($1, $2, $3, $4, NOW(), NOW()) RETURNING *',
      [user_id, hub_name, location, is_online] // Ensure `is_online` is provided or defaults to false
    );
    
    console.log("DB result:", result.rows[0]);
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error creating hub: ${error.message}`);
  }
};
