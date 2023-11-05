const express = require('express');
const querySQLServerRouter = require('./QuerySQLServer'); // Make sure this matches the actual file name

const app = express();

// Middleware to parse the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// QuerySQLServer router for the root path
app.use('/', querySQLServerRouter); // Use the router here

app.listen(3000, () => {
  console.log('Server is running on 127.0.0.1');
});
