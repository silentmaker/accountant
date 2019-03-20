const Trouble = require('../models/trouble');

class troubleCtrl {
  static async index() {
    console.log('index', Trouble);
  }

  static async show() {
    console.log('show', Trouble);
  }

  static async update() {
    console.log('update', Trouble);
  }

  static async destroy() {
    console.log('destroy', Trouble);
  }
}

module.exports = troubleCtrl;
