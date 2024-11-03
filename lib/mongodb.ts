import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const options = {};

console.log(uri);

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Extend the NodeJS global object to include `_mongoClientPromise`
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  // In dev mode, use a global variable so we don't create new connections
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, create a new connection for each invocation
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export the client promise
export default clientPromise;
