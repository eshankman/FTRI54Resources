import mongoose from 'mongoose';

export const getModel = (collectionName) => {
  const schema = new mongoose.Schema({}, { strict: false }); // generic schema
  return mongoose.models[collectionName] || mongoose.model(collectionName, schema, collectionName); //return the schema based on the mongodb collection called.
};
