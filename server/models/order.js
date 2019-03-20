const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  下单IP: String,
  下单时间: String,
  地区: String,
  套餐单价: String,
  套餐明细: String,
  姓名: String,
  市: String,
  广告id: String,
  广告名称: String,
  快递公司: String,
  总价: String,
  手机号码: String,
  投放账户: String,
  收件地址: String,
  数量: String,
  留言: String,
  省: String,
  订单ID: String,
  订单状态: String,
  详情页URL: String,
  身份证: String,
  页面名称: String,
});

const Order = mongoose.model('Order', schema);

module.exports = Order;
