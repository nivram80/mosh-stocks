import xid from 'xid-js';
import { connection } from '../connect.js'
import { accountsCreateSQL, getAccountsSQL, accountsDeleteSQL, accountsEditSQL } from './sql.js';

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

export const editAccount = async (id, name) => {
  try {
    const [results] = await connection.promise().query(accountsEditSQL, [name, id]);
    if (results.affectedRows > 0) {
      return { success: true };
    }
  } catch (err) {
    console.error(err);
    return 'Error editing account in DB';
  }
};

export const deleteAccount = async (id) => {
  try {
    const [results] = await connection.promise().query(accountsDeleteSQL, [id]);
    if (results.affectedRows > 0) {
      return { success: true };
    }
  } catch (err) {
    console.error(err);
    return 'Error deleting account in DB';
  }
};
