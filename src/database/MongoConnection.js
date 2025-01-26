import { MongoClient } from 'mongodb';

class MongoConnection {
    constructor(uri, dbName) {
        this.uri = uri;
        this.dbName = dbName;
        this.client = null;
    }

    async connect() {
        try {
            if (!this.client) {
                const client = new MongoClient(this.uri);
                try {
                    this.client = client;
                    await client.connect();
                    console.log('Connected to MongoDB');
                    return client;
                } catch (e) {
                    console.error(`Something went wrong with connecting to the database server: ${e.message}`);
                }
            } else {
                this.client.connect();
                console.log('Connected to MongoDB');
                return this.client;
            }
        } catch (e) {
            console.error(`Something went wrong with connecting to the database server: ${e.message}`);
        }
    }

    async disconnect() {
        if (this.client) {
            await this.client.close();
            this.client = null;
            console.log('Disconnected from MongoDB');
        }
    }
}

export default MongoConnection;
