const dotenv = require("dotenv");
dotenv.config();

const express = require('express');
const cors = require('cors');
const app = express();

const mysql = require('mysql')

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD
})

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

app.use(cors());

var response = {success: "false"};

app.post('/login', (req, res) => {
  //connection.query(`SELECT * FROM gainsday.User WHERE Username = ${req.query.username} AND Password = ${req.query.password}`, (err, resp) => {
  connection.query(`SELECT * FROM gainsday.User`, (err, resp) => {	
    if (err) {
      console.log("error: ", err);
      return;
    }

    console.log(`SELECT * FROM gainsday.User WHERE Username = ${req.query.username} AND Password = ${req.query.password}`)

    if (resp.length) {
      console.log("found user: ", resp[0]);
      return
    }

    console.log("user not found: ", resp);
  });

  res.send(response);
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));