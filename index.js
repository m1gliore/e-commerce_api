const express = require("express")
const bodyParser = require("body-parser")
const sequelize = require("./database/sequelize")
const router = require("./routes/routes")

const app = express()

sequelize.authenticate()
    .then(() => console.log("Подключение к БД успешно"))
    .catch((e) => {
        console.log(`${e.name}: ${e.message}`)
    })

app.use(bodyParser.json(), bodyParser.urlencoded({extended: true}))
router.map((route) => app.use(route))

app.listen(3000, () => {
    console.log("Сервер запущен на порте 3000")
})