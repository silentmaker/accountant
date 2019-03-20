const Order = require('../models/order');

class orderCtrl {
  static async index(ctx) {
    ctx.body = 'getting list';
  }

  static async show() {
    console.log('show', Order);
  }

  static async upload(ctx) {
    const { orders } = ctx.request.body;
    ctx.body = orders.slice(0, 10);
  }

  static async update() {
    console.log('update', Order);
  }

  static async destroy() {
    console.log('destroy', Order);
  }
}

module.exports = orderCtrl;
