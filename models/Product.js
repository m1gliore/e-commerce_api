const sequelize = require("../database/sequelize")
const {DataTypes} = require("sequelize")

module.exports = sequelize.define("Product", {
    id: {
        field: "productId",
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        field: "title",
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        field: "description",
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        field: "image",
        type: DataTypes.STRING,
        allowNull: false
    },
    categories: {
        field: "categories",
        type: DataTypes.JSON
    },
    size: {
        field: "size",
        type: DataTypes.STRING
    },
    color: {
        field: "color",
        type: DataTypes.STRING
    },
    price: {
        field: "price",
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
})