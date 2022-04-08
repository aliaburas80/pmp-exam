const express = require('express')
const next = require('next')
const app = next({ dev })
const handle = app.getRequestHandler()
const port =  3000;
const host =  'localhost';

(async () => {
    await app.prepare();
    const server = express();
    server.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']);
    server.disable('x-powered-by');
    server.use(compression());
    server.all('*', (req, res) => handle(req, res));
    await server.listen(port, host, (err) => {
      if (err) throw err;
      console.log(`==> Ready on https://${host}:${port}`);
      console.log('==> ✅  %s is running (production: %s)', config.app.title, config.env.isProduction);
    });
  })();