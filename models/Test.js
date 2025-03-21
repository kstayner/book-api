const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    auto: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Test = mongoose.model('Test', testSchema);
module.exports = Test;