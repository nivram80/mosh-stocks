export const accountsCreateSQL = `
  INSERT INTO accounts (id, name) VALUES (?, ?)
`;
export const getAccountsSQL = `
  SELECT * FROM accounts
`;

export const positionsCreateSQL = `
  INSERT INTO positions (id, symbol, account_id, number_of_shares, cost_basis) VALUES (?, ?, ?, ?, ?)
`;
export const getPositionsSQL = `
  SELECT * FROM positions WHERE account_id = ?
`;