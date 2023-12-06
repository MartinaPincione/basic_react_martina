const express = require('express');
const insertDataRouter = require('../database/DatabaseFunctions.js');

const router = express.Router();

router.use('/api/insert', insertDataRouter);

module.exports = router;
