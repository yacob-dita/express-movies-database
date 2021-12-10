const{sequelize,DataType,Model} =require('./db')
const{Crew} = require('./models/crew');
const{Cast} = require('./models/cast');
const{Movies}= require('./models/movies');
const { cast } = require('sequelize/dist');

Cast.belongTo(Movies);
Crew.belongsTo(Movies);

Movies.hasMany(Crew);
Movies.hasMany(Cast);

module.exports= {Crew,Cast,Movies,sequelize}