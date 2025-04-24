import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const DocumentationSchema = new Schema({
  name: String,
  Description: String,
  URL: String,
  Link: String,
});

const DocumentationModel = mongoose.model('Documentation', DocumentationSchema, 'Documentation');
export default DocumentationModel;
