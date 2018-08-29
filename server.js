import express from 'express';
const app = express();

import knex from './parse-csv';

knex();
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(3000, () => console.log(`🚀 Server ready at 3000`));
