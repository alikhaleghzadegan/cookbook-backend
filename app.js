const express = require("express");
const mysql = require("mysql");
const app = express();
// const { mysqlmod } = require("./mysqlmod");

const connection = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password",
  database: "databasename",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Server!");
});

let recipe = [
  { id: 1, name: "ABC" },
  { id: 2, name: "DEF" },
];

// app.get("/", (req, res) => {
//   connection.query("SELECT * from users LIMIT 1", (err, rows) => {
//     if (err) throw err;
//     console.log("The data from users table are: \n", rows);
//     connection.end();
//   });
// });

app.listen(3000, () => {
  console.log("running in port 3000");
});
