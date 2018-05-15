const express = require("express")
const bodyParser = require("body-parser")
const router = require("./controllers/burger_controller.js")
const exphbs = require("express-handlebars")

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(router)


app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.listen(PORT, () => {
    console.log("Server listening on port: " + PORT)
})
