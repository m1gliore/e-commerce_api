const jwt = require("jsonwebtoken")

const verifyToken = (request, response, next) => {
    const {token} = request.headers
    const authHeader = token
    if (authHeader) {
        const tokenHeader = authHeader.split(" ")[1]
        jwt.verify(tokenHeader, process.env.JWT_SEC, (err, user) => {
            if (err) response.status(403).json("Токен недействителен!")
            request.user = user
            next()
        })
    } else {
        return response.status(401).json("Вы не авторизованы!")
    }
}

const verifyTokenAndAuthorization = (request, response, next) => {
    verifyToken(request, response, () => {
        console.log(request.user.id, request.params.id)
        if (request.user.id == request.params.id || request.user.isAdmin) {
            next()
        } else {
            response.status(403).json("У вас недостаточно прав для выполнения этого действия")
        }
    })
}

module.exports = {verifyToken, verifyTokenAndAuthorization}