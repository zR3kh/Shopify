require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connect');
const app = express();
const productRoute = require('./routes/ProductRoute');
const notFound = require('./middleware/404');
const asyncWrapper = require('./middleware/async');
const invalidId = require('./middleware/errors');

/**
 * Middlewares
 */
app.use(express.json());
app.use('/', productRoute);
app.use(notFound);
app.use(invalidId);

/**
 * Launch server & bdd
 */
asyncWrapper(async () => {
  await connectDB(process.env.CONNECT_DB_URL);
  app.listen(process.env.PORT, console.log(`Listening on port ${process.env.PORT}`))
})();