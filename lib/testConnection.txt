const mongoose = require('mongoose');

async function testMongoDBConnection() {
  const mongoURI = 'mongodb+srv://renex-client:anfas18@renex-dev.cpxve.mongodb.net/?retryWrites=true&w=majority&appName=renex-dev';

  try {
    await mongoose.connect(mongoURI);
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  } finally {
    mongoose.connection.close();
  }
}

testMongoDBConnection();
