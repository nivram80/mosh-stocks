import { getAccounts, createAccount, editAccount, deleteAccount } from '../models/accounts.js';

export const accountsList = async (req, res) => {
  const results = await getAccounts();
  return res.send(results);
}

export const accountsCreate = async (req, res) => {
  const results = await createAccount(req.body.name)
  return res.send(results);
}

export const accountsEdit = async (req, res) => {
  const results = await editAccount(req.body.id, req.body.name)
  return res.send(results);
}

export const accountsDelete = async (req, res) => {
  const results = await deleteAccount(req.body.id)
  return res.send(results);
}
