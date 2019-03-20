const Profit = require('../models/profit');

class profitCtrl {
  static async index() {
    console.log('index', Profit);
  }

  static async show() {
    console.log('show', Profit);
  }

  static async update() {
    console.log('update', Profit);
  }

  static async destroy() {
    console.log('destroy', Profit);
  }
}

module.exports = profitCtrl;
