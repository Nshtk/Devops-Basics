const express = require('express');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
	connectionString: process.env.PG_CONNECTION_STRING
});

app.get('/data', async (req, res) => {
	const result = await pool.query('SELECT NOW() as time');
	res.json({ timestamp: result.rows[0].time });
});

app.listen(5000, () => console.log('Backend running on port 5000'));