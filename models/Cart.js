const sequelize = require("../database/sequelize")
const {DataTypes} = require("sequelize")

module.exports = sequelize.define("Cart", {
    id: {
        field: "cartId",
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        field: "userId",
        type: DataTypes.STRING
    },
    productId: {
        field: "productId",
        type: DataTypes.STRING
    },
    quantity: {
        field: "quantity",
        type: DataTypes.STRING,
        defaultValue: "1"
    }
}, {
    timestamps: false,
    freezeTableName: true
})