import db from '../utils/db';

export const setMeterById = async (meterId: number, state: boolean) => {
  try {
    await db.query(
      'UPDATE meters SET state = $1, updated_at = NOW() WHERE id = $2',
      [state, meterId]
    );
  } catch (error) {
    throw new Error(`Failed to set meter with ID ${meterId}: ${error.message}`);
  }
};
