import express from 'express';
import dotenv from 'dotenv';
import conn from './src/db/conn.js';

dotenv.config();

const app = express();
const port = process.env.port;
const uri = process.env.uri;
const db = process.env.db;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

const connection = conn(uri, `${db}`);
