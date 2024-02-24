require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connect');
const app = express();
const port = 3000;
const productRoute = require('./routes/ProductRoute');

/**
 * Routes
 */
app.use('/', productRoute);

/**
 * Launch server & bdd
 */
const launch = async () => {
  try {
    await connectDB(process.env.CONNECT_DB_URL);
    app.listen(port, console.log(`Listening on port ${port}`))
  } catch (err) {
    console.log(err);
  }
}
launch();
