const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
});

const Trouble = mongoose.model('Trouble', schema);

module.exports = Trouble;
