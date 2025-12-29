const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    minLenghth: 2,
  },

  author: {
    type: String,
    minLenghth: 2,
  },

  release_year: {
    type: Number,
  },
  books: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'book' }],
    default: [],
  },
});

module.exports = mongoose.model('book', bookSchema);