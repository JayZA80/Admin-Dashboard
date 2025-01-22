import express from 'express';
import dotenv from 'dotenv';
import conn from './src/conn.js';
import getDataDefault from './src/getData.js';

dotenv.config();

const app = express();
const port = process.env.port;
const uri = process.env.uri;
const db = process.env.db;

app.use(express.static('public'));

app.get('/', res => {
    res.sendFile('public/index.html');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

conn(uri);


// const defaultData = getDataDefault(connection);
// console.log(defaultData);
