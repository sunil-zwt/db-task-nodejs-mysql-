const express = require("express");
const app = express();
const db = require("./db/connect");

app.get("/user", (req, res) => {
  let sql = "SELECT * FROM USER";

  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Show the data");
    res.json({ sucess: true, data: result });
  });
});

app.post("/user", (req, res) => {
//   let fname = req.body.firstName;
//   let lname = req.body.lastName;

  let user = { firstName: 'sourav', lastName: 'saha' };
  let sql = "INSERT INTO user SET ?";

  db.query(sql, user, (err, result) => {
    if (err) throw err;
    console.log("data inserted");
    res.json({ sucess: true, data: result.affectedRows });
  })
  console.log(user)
});
app.listen(5000, () => {
  console.log("server is listening on 5000 ");
});
