import xid from 'xid-js';
import { connection } from '../connect.js'
import { positionsCreateSQL, getPositionsSQL } from '../sql.js';

export const getPositions = async () => {
  try {
    const [results] = await connection.promise().query(getPositionsSQL);
    return results;
  } catch (err) {
    console.error(err);
    return 'Error getting positions from DB';
  }
};

export const createPosition = async (symbol, account_id, number_of_shares, cost_basis) => {
  try {
    const id = 'pos_' + xid.next();
    const [results] = await connection.promise().query(positionsCreateSQL, [id, symbol, account_id, number_of_shares, cost_basis]);
    if (results.affectedRows > 0) {
      return { success: true };
    }
  } catch (err) {
    console.error(err);
    return 'Error creating position in DB';
  }
};