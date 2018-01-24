import 'babel-polyfill';
import Koa  from 'koa';
import { Nuxt, Builder } from 'nuxt';

const app = new Koa();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js');
config.dev = !(app.env === 'production');
// Instanciate nuxt.js
const nuxt = new Nuxt(config);
// Build in development
if (config.dev) {
  try {
    const builder = new Builder(nuxt);
    builder.build();
  }
  catch (e) {
    // eslint-disable-line no-console
    console.error(e);
    process.exit(1);
  }
}

app.use(async (ctx) => {
  // koa defaults to 404 when it sees that status is unset
  ctx.status = 200;
  return new Promise((resolve, reject) => {
    ctx.res.on('close', resolve);
    ctx.res.on('finish', resolve);
    nuxt.render(ctx.req, ctx.res, (promise) => {
      // nuxt.render passes a rejected promise into callback on error.
      promise.then(resolve).catch(reject);
    });
  });
});

app.listen(port, host);
// eslint-disable-line no-console
console.log('Server listening on ' + host + ':' + port);
