const router = require("express").Router()
const {verifyToken, verifyTokenAndAuthorization} = require("./verifyToken")
const cryptoJS = require("crypto-js")
const User = require("../models/User")

router.put("/users/:id", verifyTokenAndAuthorization, (request, response) => {
    const id = request.params.id
    if (request.body.password) {
        request.body.password = cryptoJS.AES.encrypt(request.body.password, process.env.PASS_SEC).toString()
    }

    User.update({username: request.body.username}, {where: {id: id}})
        .then(response.status(200).json(request.user))
        .catch(e => response.status(500).json(`Произошла ошибка вида ${e.name}: ${e.message}`))
})

module.exports = router