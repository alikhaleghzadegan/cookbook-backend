// const { mysqlmod } = require("./mysqlmod");
let express = require("express");
const app = express();
const path = require("path");
const { next } = require("process");
const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const namepswd = process.env.Pswd;
app.use(express.static(__dirname + "/public"));
app.use(express.json());
const PORT = process.env.PORT || 5000;
//   res.status(200).json({ name });
// });

app.get("/", (req, res) => {
  res.send(`<h1>Test server</h1>`);
});

// const databaseName = "recipes_db";
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: name,
//   // database: "recipes_db",
// });

// db.connect((err) => {
//   console.log("Conneting to ", databaseName);
// });
// app.get("/", (req, res) => {
//   res.send(`<h1>Test Server</h1>`);
// });

// app.get("/db", (req, res, err) => {
//   let sql = "CREATE DATABASE recipes_db";
//   db.query(sql, (result) => {
//     err ? console.log("Error creating database: ", err) : console.log(result);
//     res.send(`
//       <h1>Database created sucessfully</h1>
//       ${result}
//   SHOW DATABASE TABLE recipes_db

//     `);
//   });
// });

let server = app.listen(PORT, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("Server listening at http://%s:%s", host, port);
});
