import db from '../utils/db';

export const setAllMetersByHubId = async (hubId: number, state: boolean) => {
  
    await db.query(
      'UPDATE meters SET state = $1, updated_at = NOW() WHERE hub_id = $2',
      [state, hubId]
    );
  
};
