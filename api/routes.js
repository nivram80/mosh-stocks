import express from 'express';
import { accountsList, accountsCreate } from './accounts.js';
import { positionsList, positionsCreate } from './positions.js';

export const router = express.Router();

router.get('/accountsList', accountsList);
router.post('/accountsCreate', accountsCreate);

router.get('/positionsList', positionsList);
router.post('positionsCreate', positionsCreate);