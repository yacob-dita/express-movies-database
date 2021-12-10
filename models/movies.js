const {sequelize, Model, DataTypes} = require('../db')

class Movies extends Model {}

Movies.init({
director:DataTypes.STRING,
title:DataTypes.STRING,
cost:DataTypes.INTEGER
},{
    sequelize,
    timestamps:false
})


module.exports ={Movies}