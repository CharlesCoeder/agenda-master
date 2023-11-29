import { MongoClient } from "mongodb";

const url = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

let cachedClient = null;
let cachedDB = null;

export async function connection() {
    if (cachedClient && cachedDB)
    return {
        client: cachedClient,
        db: cachedDB
    };


    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);

    cachedClient = client;
    cachedDB = db;
}