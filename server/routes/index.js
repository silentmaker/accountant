const Router = require('koa-router');
const orderRouter = require('./order');
const profitRouter = require('./profit');
const troubleRouter = require('./trouble');

const router = new Router({
  prefix: '/api',
});

router.use('/orders', orderRouter.routes(), orderRouter.allowedMethods());
router.use('/profits', profitRouter.routes(), profitRouter.allowedMethods());
router.use('/troubles', troubleRouter.routes(), troubleRouter.allowedMethods());

module.exports = router;
