const express = require('express') 
const burger = require("../models/burger.js")

const router = express.Router()

router.get("/", (req, res) => {

    burger.getBurgers((data) => {
        var hbsObject = {
            burgers: data
        }
        // console.log(hbsObject)

        res.render("index", hbsObject)

    })
})

router.post("/api/burgers", (req, res) => {

    let newBurger = {
        burger_name: req.body.burgerName
    }

    burger.addBurger(newBurger, (data) => {
        // console.log(data)
        res.json({
            id: data.insertId
        })
    })

})

router.put("/api/burgers/:id", (req, res) => {
    let id = req.params.id

    burger.devourBurger(id, (data) => {
        // console.log(data)
        res.send(200)
    })

})

module.exports = router

