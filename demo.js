const express = require("express");
const mysql = require("mysql");

const app = express();

//create db

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

//insert Data
app.post("/db/insertdb", (req, res) => {
  let user = req.body;
  let sql = "INSERT INTO user SET ?";

  db.query(sql, user, (err, result) => {
    if (err) throw err;
    console.log("data inserted");
    res.json({sucess:true, data:result});
  });
});

//select records
app.get("/db/getdb", (req, res) => {
  let sql = "SELECT * FROM USER";

  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Show the data");
    res.json({sucess:true, data:result});
  });
});
//get asingle user
app.get("/db/getdb/:id", (req, res) => {
    let sql = `SELECT * FROM USER WHERE userId=${req.params.id}`;
  
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log("Show the data");
      res.json({sucess:true, data:result});
    });
  });
//update records

app.get("/db/updatedb/:id", (req, res) => {
  let user = { firstName: "Suvam", lastName: "Dash" };
  let sql = `UPDATE USER SET ? WHERE userId= ${re.params.id}`;

  db.query(sql, user, (err, result) => {
    if (err) throw err;
    console.log("UPDATED data");
    res.json({sucess:true, data:result});
  });
});

//Delete record
app.get("/db/deletedb/:id", (req, res) => {
  let sql = `DELETE FROM  USER WHERE userId =${req.params.id}`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("deleted data");
    res.json({sucess:true, data:result});
  });
});

app.listen(5000, () => {
  console.log("server is listening on 5000 ");
});
