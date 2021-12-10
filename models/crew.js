const {sequelize} = require('../db')

const {DataType,Model, DataTypes} = require('sequelize')
class Crew extends Model {}

Crew.init({
name:DataTypes.STRING,
title:DataTypes.STRING,
salary:DataTypes.INTEGER
},{
    sequelize,
    timestamps:false,
})


module.exports ={Crew}