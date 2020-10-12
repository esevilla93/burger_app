var mysql = require("mysql");
var connection;

if (process.envJAWSDB_URL) {
    connection = mysql.createConnection(process.env.envJAWSDB_URL);
} else {

    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "sevilla08",
        database: "burgers_db"
    });

    connection.connect(function (err) {
        if (err) {
            console.error("error in connection: " + err.stack);
            return;
        }
        console.log("connected as id" + connection.threadId);

    });

};

module.exports = connection;