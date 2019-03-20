const Router = require('koa-router');
const profitCtrl = require('../controllers/profitCtrl');

const router = new Router();

router.get('/', profitCtrl.index);

router.get('/:id', profitCtrl.show);

router.del('/:id', profitCtrl.destroy);

module.exports = router;
