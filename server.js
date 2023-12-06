const express = require('express');
const cors = require('cors');
const router = require('./src/database/DatabaseFunctions.js');

const app = express();

app.use(cors());

app.use('/', router);

app.listen(5050, () => {
  console.log(`Server is running on port 5000`);
});
