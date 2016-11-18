'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
  todos: String,
  done: String,
  notifications: String
});


module.exports = mongoose.model('User', UserSchema);
