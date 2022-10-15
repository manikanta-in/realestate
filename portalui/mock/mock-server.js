const jsonServer = require('json-server');
const mountAuthRoutes = require('./routes/auth-routes');

const server = jsonServer.create();

const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);


// Add custom routes before JSON Server router
mountAuthRoutes(server);

// Use default router

server.listen(3001, () => {
  // eslint-disable-next-line no-console
  console.log('Mock server is running on port 3001');
});
