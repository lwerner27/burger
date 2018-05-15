const connection = require("./connection.js")

const orm = {

    selectAll: function(column, table, cb) {

        let queryString = "SELECT ?? FROM ??"
        connection.query(queryString, [column, table], (err, data) => {
            if (err) throw err
            cb(data)
        })
    },

    insertOne: function(table, object, cb) {
        
        let queryString = `INSERT INTO ${table} SET ?`

        connection.query(queryString, object, (err, data) => {
            if (err) throw err
            
            cb(data)
            
        })
    },

    updateOne: function(table, colToUpdate, newVal, column, selector, cb) {
        queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?"

        connection.query(queryString, [table, colToUpdate, newVal, column, selector], (err, data) => {
            if (err) throw err

            cb(data)
        })

    }

}


module.exports = orm