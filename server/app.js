const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./routes');
const initDB = require('./database');

const app = new Koa();
const port = 3000;

initDB();

app.use(bodyParser({
  jsonLimit: '5mb',
}));

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const cost = Date.now() - start;
  console.log(`${ctx.method} '${ctx.url}', Response Time: ${cost}ms`);
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log(`Server listening on port: ${port}`);
});
