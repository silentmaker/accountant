const mongoose = require('mongoose');

const initDB = () => {
  mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

  const db = mongoose.connection;

  db.on('error', () => {
    console.log('Database Connection Error!');
  });

  db.once('open', () => {
    console.log('Mongoose Database Connected');
  });
};

module.exports = initDB;
