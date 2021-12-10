
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

        //    this will connect test file with index.
           await testMovies.addCrew(testCrew1)
           await testMovies.addCrew(testCrew2)
           await testMovie.addCast(testCast1)
           await testMovie.addCast(testCast2)

afterAll(async()=>{
    sequelize.close()
})





})
