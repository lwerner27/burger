const mysql = require("mysql")
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "burgers_db"
    })
}

connection.connect((err, result) => {
    console.log("Conneced on id: " + connection.threadId)
})

module.exports = connection