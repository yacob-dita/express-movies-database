const express = require('express')
const path = require('path')
const{Crew} = require('./models/crew')
const{Cast} = require('./models/cast')
const{Movies} = require('./models/movies')

const app = express()
const port =3000
app.use(express.json())




// get all movies
app.get('/Movies',async(req,res)=>{
    const allMovies = await Movies.findAll()
    res.json(allMovies);
    
})
app.get('/Movies/:id',async(req,res)=>{
    const allMovies = await Movies.findByPk(req.params.id)
    res.json(allMovies)
})

app.post('/Movies',async(req,res)=>{
    let newMovies = await Movies.create(req.body)
    res.send("New Movies is Added!")
})

app.put('/Moviess/:id', async(req,res)=>{
    
    let updatedMovies = await Movies.update(req.body,{
        where: {id:req.params.id}
        })
    res.send(updatedMovies? "movies update":"update failed")

})


app.delete('/Movies/:id', async(req,res)=>{
    await Movies.destroy({
        where:{id:req.params.id}
    })
    res.send("Movies destroyed")
})

// get all cast members
app.get('/Cast',async(req,res)=>{
    const allCast = await Cast.findAll()
    res.json(allCast)
})
// get cast members by Id
app.get('/Cast/:id',async(req,res)=>{
    const thisCast = await Cast.findByPk(req.params.id)
    res.json(thisCast)
})
// post new cast members
app.post('/Cast',async(req,res)=>{
    let newCast = await Cast.create(req.body)
    res.send("New cast is Added!")
})
app.put('/Cast/:id',async(req,res)=>{
    let updatedCast= await Cast.update(req.body,{
        where:{id:req.params.id}
    })
    res.json(updatedCast);

})

app.delete('/Cast/:id', async(req,res)=>{
    await Cast.destroy({
        where:{id:req.params.id}
    })
    res.send("Cast destroyed")
})



// get allcrew members
app.get('/crew',async(req,res)=>{
    const allCrews = await Crew.findAll()
    res.json(allCrews)
})

// get one crewmembersby Id 

app.get('/crew/:id',async(req,res)=>{
    const thisCrew = await Crew.findByPk(req.params.id)
    res.json(thisCrew)
})
// get one crewmember by name
app.get('/crew-name/:name',async(req,res)=>{
    const thisCrew = await Crew.findOne({where:{name:req.params.name}})
    res.json(thisCrew)
})

// this Crew is added to the Movies
app.post('/Crew',async(req,res)=>{
    let newCrew = await Crew.create(req.body)
    res.send("New crew member is coming")

})

app.get('/search',async(req,res)=>{
    let results =[]
    if (req.query.name){
        results = await Crew.findAll({where:{name:req.query.name}})
    } else if (req.query.salary){
        results = await Crew.findAll({where:{salary:req.query.salary}})
    }
    res.json(results)
})



app.put('/Crew/:id', async(req,res)=>{
    
    let updatedCrew = await Crew.update(req.body,{
        where: {id:req.params.id}
        })
    res.send(updatedCrew? "Restaurant update":"update failed")

})
// This is delete function 
app.delete('/Crew/:id', async(req,res)=>{
     await Crew.destroy({
         where:{id:req.params.id}
     })
     res.send("Crewmember destroyed")
 })












app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`)
})