const mongoose = require('mongoose');

const authorTestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
});

const AuthorTest = mongoose.model('AuthorTest', authorTestSchema);
module.exports = AuthorTest;