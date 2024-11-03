// src/types/mongo-client.d.ts

import { MongoClient } from "mongodb";

declare module NodeJS {
  interface Global {
    _mongoClientPromise: Promise<MongoClient>;
  }
}