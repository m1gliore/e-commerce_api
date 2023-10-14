const sequelize = require("../database/sequelize")
const {DataTypes} = require("sequelize")

module.exports = sequelize.define("Order", {
    id: {
        field: "orderId",
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
    },
    amount: {
        field: "amount",
        type: DataTypes.INTEGER,
        allowNull: false
    },
    address: {
        field: "address",
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        field: "status",
        type: DataTypes.STRING,
        defaultValue: "в ожидании"
    }
}, {
    timestamps: false,
    freezeTableName: true
})