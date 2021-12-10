


const {Sequelize,DataTypes,Model} = require('sequelize')
const path = require('path')

const sequelize = new Sequelize('database','username','password',{
    dialect: 'sqlite',
      // Storage: './express-movies-db.sqlite',
     logging: false,

     storage: path.join(__dirname, 'express-movies-database.sqlite')
    
})
sequelize.authenticate().then(console.log("connected")).catch(error=>{console.error("not able to connect",error)});

module.exports = {sequelize,DataTypes,Model}