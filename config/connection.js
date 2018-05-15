const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
})

connection.connect((err, result) => {
    console.log("Conneced on id: " + connection.threadId)
})

module.exports = connection