import { MongoClient } from 'mongodb';

const conn = async (uri) => {
    try {
        const client = new MongoClient(uri);
        let connection;
        try {
            connection = await client.connect();
        } catch (e) {
            console.error(`Something went wrong with connecting to the database: ${e.message}`);
        }
        console.log('Connected to database!')
        return connection;
    } catch (e) {
        console.error(`Something went wrong with connecting to the database: ${e.message}`);
    }
};

export default conn;
