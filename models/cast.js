const {sequelize} = require('../db')

const {DataType,Model, DataTypes} = require('sequelize')
class Cast extends Model {}

Cast.init({
name:DataTypes.STRING,
title:DataTypes.STRING,
role:DataTypes.STRING,
},{
    sequelize,
    timestamps:false,
})


module.exports ={Cast}