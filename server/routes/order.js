const Router = require('koa-router');
const orderCtrl = require('../controllers/orderCtrl');

const router = new Router();

router.get('/', orderCtrl.index);

router.post('/upload', orderCtrl.upload);

router.get('/:id', orderCtrl.show);

router.del('/:id', orderCtrl.destroy);

module.exports = router;
