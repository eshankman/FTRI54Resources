import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true }, //required to be unique
  password: { type: String, required: true, minlength: 6 }, //requred to be 6 chars
});

const User = mongoose.model('User', userSchema);

export default User;
