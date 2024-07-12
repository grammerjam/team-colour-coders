const mysql = require('mysql');
const express = require('express');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
    ssl: {
        ca: fs.readFileSync(path.join(__dirname, 'certificates', 'ca-certificate.pem'))
    }
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

app.get('/test-db', (req, res) => {
    connection.query('SELECT 1 + 1 AS solution', (error, results) => {
        if (error) throw error;
        res.send(`The solution is: ${results[0].solution}`);
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});

