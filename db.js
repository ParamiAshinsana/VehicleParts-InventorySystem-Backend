const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234', 
  database: 'vehiclemanagementsystem'
});

db.connect((err) => {
  if (err) {
    console.log('DB Connection Failed:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

module.exports = db;
