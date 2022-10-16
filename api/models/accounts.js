import xid from 'xid-js';
import { connection } from '../connect.js'
import { accountsCreateSQL, getAccountsSQL } from '../sql.js';

export const getAccounts = async () => {
  try {
    const [results] = await connection.promise().query(getAccountsSQL);
    return results;
  } catch (err) {
    console.error(err);
    return 'Error getting accounts from DB';
  }
};

export const createAccount = async (name) => {
  try {
    const id = 'act_' + xid.next();
    const [results] = await connection.promise().query(accountsCreateSQL, [id, name]);
    if (results.affectedRows > 0) {
      return { success: true };
    }
  } catch (err) {
    console.error(err);
    return 'Error creating account in DB';
  }
};
