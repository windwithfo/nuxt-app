import Koa  from 'koa';
import Nuxt from 'nuxt';

const app = new Koa();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

// Start nuxt.js
async function start() {
  // Import and Set Nuxt.js options
  let config = require('../nuxt.config.js');
  config.dev = !(app.env === 'production');
  // Instanciate nuxt.js
  const nuxt = await new Nuxt(config);
  // Build in development
  if (config.dev) {
    try {
      await nuxt.build();
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
    await nuxt.render(ctx.req, ctx.res);
  });

  app.listen(port, host);
  // eslint-disable-line no-console
  console.log('Server listening on ' + host + ':' + port);
}

start();
