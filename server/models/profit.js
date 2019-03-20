const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
});

const Profit = mongoose.model('Profit', schema);

module.exports = Profit;
