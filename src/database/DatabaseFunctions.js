const express = require('express');
const sql = require('mssql');
const router = express.Router();

const config = {
  user: 'azureuser',
  password: 'Houndlover.221',
  server: 'martina7server.database.windows.net',
  database: 'martina7database',
};

router.post('/insert/:name/:address', async (req, res) => {
  try {
    await sql.connect(config);

    const request = new sql.Request();

    const query = `
      INSERT INTO people (name, address)
      VALUES ('${req.params.name}', '${req.params.address}');
    `;

    const result = await request.query(query);

    console.log(`Successfully inserted person ${req.params.name}`);
    res.status(200).send('INSERTED PERSON');
  } catch (err) {
    console.error(err);
    res.status(500).send('error');
  } finally {
    sql.close();
  }
});

module.exports = router;
