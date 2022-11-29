import express from 'express';
import { accountsList, accountsCreate, accountsEdit, accountsDelete } from './controllers/accounts.js';
import { positionsList, positionsCreate, positionsDelete } from './controllers/positions.js';

export const router = express.Router();

router.get('/accountsList', accountsList);
router.post('/accountsCreate', accountsCreate);
router.put('/accountsEdit', accountsEdit);
router.delete('/accountsDelete', accountsDelete);

router.get('/positionsList', positionsList);
router.post('/positionsCreate', positionsCreate);
router.delete('/positionsDelete', positionsDelete);