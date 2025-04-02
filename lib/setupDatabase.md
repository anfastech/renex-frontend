const path = require('path');
const { config } = require('dotenv');
config({ path: path.resolve(__dirname, '../.env.local') }); // Adjust path to root .env.local

const clientPromise = require('./mongodb'); // Adjust the path to match your setup

async function setupDatabase() {
  try {
    // Confirm MONGODB_URI is loaded
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined. Check your .env.local file.");
    }
    console.log("MONGODB_URI:", process.env.MONGODB_URI); // Log to confirm

    const client = await clientPromise; // Await the promise to get the client
    const db = client.db(); // Get the database reference; default database from client is used here.

    const collectionName = "users";
    const collection = db.collection(collectionName);

    await collection.deleteMany({}); // Optional: Clear existing data

    const sampleData = [
      { name: "Alice", age: 25, city: "New York" },
      { name: "Bob", age: 30, city: "San Francisco" },
      { name: "Charlie", age: 35, city: "Los Angeles" }
    ];
    await collection.insertMany(sampleData);

    console.log(`Inserted sample data into the '${collectionName}' collection!`);

    const collections = await db.collections();
    console.log("Connected to MongoDB! Collections:");
    collections.forEach((col) => {
      console.log(col.collectionName);
    });
  } catch (error) {
    console.error("Failed to set up MongoDB collection:", error);
  }
}

setupDatabase();
