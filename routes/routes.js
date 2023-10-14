const authRoute = require("./authentication")
const cartRoute = require("./cart")
const orderRoute = require("./order")
const productRoute = require("./product")
const userRoute = require("./user")

module.exports = [
    authRoute, cartRoute, orderRoute, productRoute, userRoute
]