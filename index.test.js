
const {Cast, Movies, Crew, sequelize} = require('./index')


describe('Movies Database',()=>{
    beforeAll(async()=>{
        await sequelize.sync({force: true})

        const arrayOfMovies = [
            {director:'James',title:'Rocky',cost:400000},
            {director:'Roberto',title:'seven',cost:300000},
        ]
        const arrayOfCast = [
           {name:'van Damme',title:'Protagonist',role:'actor'},
           {name:'Jackman',title:'Antagonist',role:'enemy'},
       ]
       const arrayOfCrew =[
           {name:'John',title:'Production Designer',salary:3000},
           {name:'Cathy',title:'Camera Operator',salary:3250},
           {name:'Martha',title:'production Manager',salary:3250},
       ]
       await Cast.bulkCreate(arrayOfCast)
       await Movies.bulkCreate(arrayOfMovies)
       await Crew.bulkCreate(arrayOfCrew)
       
    })
//  passede test for movies
    test('Movies have director', async()=>{
        const testMovie = await Movies.findOne({where:{director:"James"}});
        expect(testMovie.title).toBe('Rocky');
    })

    test('Movies have title', async()=>{
        const testMovie = await Movies.findOne({where:{title:"seven"}});
        expect(testMovie.title).toBe('seven');
    })
// passed test for castmember
    test('Cast has title', async()=>{
         const testCast = await Cast.findOne({where:{title:"Protagonist"}});
            expect(testCast.name).toBe('van Damme');
         })

     test('Cast has castmember who has role', async()=>{
             const testCast = await Cast.findOne({where:{title:"Protagonist"}});
                 expect(testCast.role).toBe('actor');
              })

    test('Cast has castmember who has role', async()=>{
                
          const testCast = await Cast.findOne({where:{title:"Antagonist"}});
                   expect(testCast.role).toBe('enemy');
                 })

// passed test for crewmember

   test('Crew has crewmember who has name', async()=>{
                
 const testCrew = await Crew.findOne({where:{name:"John"}});
 expect(testCrew.name).toBe('John');
    })

 test('Crew has crewmember who has title', async()=>{
                
 const testCrew = await Crew.findOne({where:{title:"Production Designer"}});
    expect(testCrew.title).toBe('Production Designer');
    })

test('Crew has crewmember who has salary', async()=>{
                
    const testCrew = await Crew.findOne({where:{salary:3000}});
    expect(testCrew.salary).toBe(3000);
           })


test('Movies can have Crew',async()=>{
    // read the test movies instnce from db
    const testMovies = await Movies.findOne({where:{title:'Rocky'}});
    // create 2 test instance of of Crew
    const testCrew1= await Crew.findOne({where:{name:'John'}});
    const testCrew2 = await Crew.findOne({where:{name:'Cathy'}});
    const testCrew3 = await Crew.findOne({where:{name:'Martha'}})
    // add test Crew to test Movies
    await testMovies.addCrew(testCrew1)
    await testMovies.addCrew(testCrew2)
    await testMovies.addCrew(testCrew3)
    // retrieve list of Crew in the movies
    const crewsList = await testMovies.getCrews()
    // const crewsList = await testMovies.getCrews()
    // const crewList = await testMovies.getCrews()
    expect(crewsList.length).toBe(3)
    expect(crewsList[2] instanceof Crew).toBeTruthy()
    expect(crewsList[2].name).toMatch('Martha')


})
test('movies can have Cast',async()=>{

    // read the test movies instance from database
    const testMovies = await Movies.findOne({where:{director:'James'}});
    
    // create 2 test instance of cast
    const testCast1 = await Cast.findOne({where:{name:"van Damme"}})
    const testCast2 = await Cast.findOne({where:{name:"Jackman"}})

    // add testCast into testMovies to create bondage between two test.
    await testMovies.addCast(testCast1)
    await testMovies.addCast(testCast2)
    // retrieve the list of Crew in this Movies
    const castList = await testMovies.getCasts()
    expect(castList.length).toBe(2)
    expect(castList[1]instanceof Cast).toBeTruthy()
    expect(castList[1].name).toMatch('Jackman')

})



        //    this will connect test file with index.
        //    await testMovies.addCrew(testCrew1)
        //    await testMovies.addCrew(testCrew2)
        //    await testMovie.addCast(testCast1)
        //    await testMovie.addCast(testCast2)

afterAll(async()=>{
    sequelize.close()
})


})
