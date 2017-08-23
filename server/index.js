const express = require('express');
const next = require('next');
const httpProxy = require('http-proxy');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Proxy that is going to be used to access backend services
const proxy = httpProxy.createProxyServer({});

const hostName = 'https://staging.yachtlife.club/api';

app.prepare()
  .then(() => {
    const server = express();

    // Proxy to API server
    server.use('/api', (req, res) => {
      req.headers.host = 'staging.yachtlife.club';
      proxy.web(req, res,
        { target: hostName },
        (error) => {
          console.error('ERROR: API Proxy, url: ', req.originalUrl, ', error: ', error);
        },
      );
    });

    server.get('*', (req, res) => {
      global.navigator = global.navigator || {};
      global.navigator.userAgent = req.headers['user-agent'] || 'all';
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  });
