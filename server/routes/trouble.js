const Router = require('koa-router');
const troubleCtrl = require('../controllers/troubleCtrl');

const router = new Router();

router.get('/', troubleCtrl.index);

router.get('/:id', troubleCtrl.show);

router.del('/:id', troubleCtrl.destroy);

module.exports = router;
