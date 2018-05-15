const orm = require("../config/orm.js")

const burger = {
    getBurgers: function(cb) {
        orm.selectAll("*", "burgers", cb) 
    },
    
    addBurger: function(sqlObject, cb) {
        orm.insertOne("burgers", sqlObject, cb)
    },

    devourBurger: function(id, cb) {
        orm.updateOne("burgers", "devoured", true, "id", id, cb)
    }

}

module.exports = burger