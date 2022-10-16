import { getPositions, createPosition } from './models/positions.js';

export const positionsList = async (req, res) => {
  const results = await getPositions();
  return res.send(results);
}

export const positionsCreate = async (req, res) => {
  const results = await createPosition(req.body.symbol, req.body.account_id, req.body.number_of_shares, req.body.cost_basis)
  return res.send(results);
}