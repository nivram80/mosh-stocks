import express from 'express';
import bodyParser from 'body-parser';
import { router } from './routes.js';
import { initDB } from './connect.js';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

initDB();

app.use('/', router)

const server = app.listen(8010, () => {
  const port = server.address().port;
  console.log(`Server is running on http://localhost:${port}`)
});
