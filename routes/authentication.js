const User = require("../models/User")
const router = require("express").Router()
const cryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

//РЕГИСТРАЦИЯ
router.post("/auth/register", (request, response) => {
    User.create({
        username: request.body.username,
        email: request.body.email,
        password: cryptoJS.AES.encrypt(request.body.password, process.env.PASS_SEC).toString()
    }).then((user) => {
        response.status(201).json(user)
    }).catch((e) => {
        response.status(422).json(`Произошла ошибка вида ${e.name}: ${e.message}`)
    })
})

//ВХОД
router.post("/auth/login", (request, response) => {
    User.findOne({where: {username: request.body.username}}).then((user) => {
        const originalPassword = cryptoJS.AES.decrypt(user.password, process.env.PASS_SEC).toString(cryptoJS.enc.Utf8)
        const {dataValues} = user
        const {password, ...other} = dataValues
        const accessToken = jwt.sign({
            id: user.id,
            isAdmin: user.isAdmin
        }, process.env.JWT_SEC, {
            expiresIn: "3d"
        })

        !user || originalPassword !== request.body.password ? response.status(401)
            .json("Данные введены неверно") : response.status(200).json({...other, accessToken})
    }).catch((e) => {
        response.status(500).json(`Данные введены неверно`)
    })
})

module.exports = router