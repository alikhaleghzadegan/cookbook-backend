const mysqlmod = (res, req) => {
    const mysql = require("mysql");
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
  return connection.connect(err);
};
module.exports = { mysqlmod };
