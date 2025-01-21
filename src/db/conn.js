import { MongoClient } from 'mongodb';

const conn = async (uri, db) => {
    const client = new MongoClient(uri);
    let connection;
    try {
        connection = await client.connect();
    } catch (e) {
        console.error(`Something went wrong with connecting to the database: ${e.message}`);
    }
    const database = connection.db(db);
    const collection = database.collection('info');
    return collection;
};

export default conn;
