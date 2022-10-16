import { getAccounts, createAccount } from './models/accounts.js';

export const accountsList = async (req, res) => {
  const results = await getAccounts();
  return res.send(results);
}

export const accountsCreate = async (req, res) => {
  const results = await createAccount(req.body.name)
  return res.send(results);
}