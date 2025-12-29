const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLenghth: 2,
  },

  lastname: {
    type: String,
    required: true,
    minLenghth: 2,
  },

  Username: {
    type: String,
    required: true,
    minLenghth: 5,
  },
  users: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    default: [],
  },
});

module.exports = mongoose.model('user', userSchema);
