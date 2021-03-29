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

app.post('/login', (req, res) => {
  var result = false;
  var getDBInfo = function(callback) {

  		let sql = 'SELECT * FROM gainsday.User WHERE Username = ' + String(req.query.username) + ' AND Password = ' + String(req.query.password);
	  	connection.query(sql, (err, resp) => {	
		    if (err) {
		      console.log("error: ", err);
		      return callback(err);
		    }

		    console.log(sql)

		    if (resp.length) {
		      console.log("found user: ", resp[0]);
		      result = true;
		    }

		    callback(null, result);
	  	});
	}

	getDBInfo(function (err, result) {
		console.log({success: result})
		res.send({success: result});
	});
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));