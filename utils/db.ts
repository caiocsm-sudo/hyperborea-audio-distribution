import { MongoClient, Db } from "mongodb";

// type Database = { client: MongoClient; db: Db };

let cachedClient: MongoClient;
let cachedDb: Db;

const connectToDb = async () => {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const connectionString = process.env.MONGODB_URI as string;
  const dbName = process.env.MONGODB_DB as string;

  if (!connectionString || !dbName) throw new Error("Not able to connect to database");

  const client = await MongoClient.connect(connectionString);
  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
};

export default connectToDb;
