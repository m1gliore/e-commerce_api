const sequelize = require("../database/sequelize")
const {DataTypes} = require("sequelize")

module.exports = sequelize.define("User", {
    id: {
        field: "userId",
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        field: "username",
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        set(value) {
            this.setDataValue("username", value)
        }
    },
    email: {
        field: "email",
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        field: "password",
        type: DataTypes.STRING,
        allowNull: false
    },
    isAdmin: {
        field: "isAdmin",
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: false,
    freezeTableName: true
})