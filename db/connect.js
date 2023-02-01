const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: "batch_2023_sunil",
  });
  db.connect((err) => {
    if (err) throw err;
    console.log("database connected");
  });


module.exports = db