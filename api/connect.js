import mysql2 from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

export const connection = mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
})

export const initDB = () => {
  console.log('checking if we need to create DB tables...')
  connection.connect((err) => {
    if (err) {
      return console.error('error: ', err.message);
    }
    console.log('Connected to the MySQL server.');
  
    const createAccounts = `
      CREATE TABLE IF NOT EXISTS accounts(
        id varchar(60) PRIMARY KEY,
        name varchar(60) NOT NULL
      )
    `;
  
    const createPositions = `
      CREATE TABLE IF NOT EXISTS positions(
        id varchar(60) PRIMARY KEY,
        symbol varchar(10) NOT NULL,
        account_id varchar(60) NOT NULL,
        number_of_shares SMALLINT NOT NULL, 
        cost_basis DECIMAL(19,2) NOT NULL
      )
    `;
  
    connection.query(createAccounts, (err, results, fields) => {
      if (err) {
        console.log(err.message);
      }
    });
  
    connection.query(createPositions, (err, results, fields) => {
      if (err) {
        console.log(err.message);
      }
    });
  
    // connection.end((err) => {
    //   if (err) {
    //     return console.log(err.message);
    //   }
    // });
  })
}


// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
let url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=DLR&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`;

// axios
//   .get(url)
//   .then(res => {
//     console.log('statusCode: ', res.status);
//     console.log(res);
//   })
//   .catch(err => {
//     console.error(err);
//   });
  
  
//   {
//     url: url,
//     json: true,
//     headers: {'User-Agent': 'request'}
//   }, (err, res, data) => {
//     if (err) {
//       console.log('Error:', err);
//     } else if (res.statusCode !== 200) {
//       console.log('Status:', res.statusCode);
//     } else {
//       // data is successfully parsed as a JSON object:
//       console.log(data);
//     }
// });
