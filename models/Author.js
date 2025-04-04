const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: false,
  },
});

const Author = mongoose.model('Author', authorSchema);
module.exports = Author;
