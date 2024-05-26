const db = require(`../db`)
const { Movie, Actor } = require(`../models`)

db.on(`error`, console.error.bind(console, `MongoDB connection error:`))

const main = async() => {
    const loveWitch = await Movie.find({title: "The Love Witch"})
    const theWitch = await Movie.find({title: "The Witch"}) 
    const practicalMagic = await Movie.find({title: "Practical Magic"})
    const theCraft = await Movie.find({title: "The Craft"})
    const suspiria = await Movie.find({title: "Suspiria"})
    
    

    const actors = [
         // Actors for "The Love Witch"
    {
        firstName: "Samantha",
        lastName: "Robinson",
        characterName: "Elaine",
        age: 32,
        died: false,
        movie: loveWitch[0]._id
      },
      {
        firstName: "Gian",
        lastName: "Keys",
        characterName: "Griff",
        age: 40,
        died: false,
        movie: loveWitch[0]._id
      },
      {
        firstName: "Robert",
        lastName: "Seeley",
        characterName: "Trish",
        age: 35,
        died: false,
        movie: loveWitch[0]._id
      },
      // Actors for "The Witch"
      {
        firstName: "Anya",
        lastName: "Taylor-Joy",
        characterName: "Thomasin",
        age: 25,
        died: false,
        movie: theWitch[0]._id
      },
      {
        firstName: "Ralph",
        lastName: "Ineson",
        characterName: "William",
        age: 50,
        died: false,
        movie: theWitch[0]._id
      },
      {
        firstName: "Kate",
        lastName: "Dickie",
        characterName: "Katherine",
        age: 45,
        died: false,
        movie: theWitch[0]._id
      },
      // Actors for "Practical Magic"
      {
        firstName: "Sandra",
        lastName: "Bullock",
        characterName: "Sally Owens",
        age: 45,
        died: false,
        movie: practicalMagic[0]._id
      },
      {
        firstName: "Nicole",
        lastName: "Kidman",
        characterName: "Gillian Owens",
        age: 50,
        died: false,
        movie: practicalMagic[0]._id
      },
      {
        firstName: "Stockard",
        lastName: "Channing",
        characterName: "Aunt Frances",
        age: 65,
        died: false,
        movie: practicalMagic[0]._id
      },
      // Actors for "The Craft"
      {
        firstName: "Robin",
        lastName: "Tunney",
        characterName: "Sarah Bailey",
        age: 45,
        died: false,
        movie: theCraft[0]._id
      },
      {
        firstName: "Fairuza",
        lastName: "Balk",
        characterName: "Nancy Downs",
        age: 47,
        died: false,
        movie: theCraft[0]._id
      },
      {
        firstName: "Neve",
        lastName: "Campbell",
        characterName: "Bonnie Harper",
        age: 48,
        died: false,
        movie: theCraft[0]._id
      },
      // Actors for "Suspiria"
      {
        firstName: "Dakota",
        lastName: "Johnson",
        characterName: "Susie Bannion",
        age: 32,
        died: false,
        movie: suspiria[0]._id
      },
      {
        firstName: "Tilda",
        lastName: "Swinton",
        characterName: "Madame Blanc / Dr. Jozef Klemperer",
        age: 60,
        died: false,
        movie: suspiria[0]._id
      },
      {
        firstName: "Mia",
        lastName: "Goth",
        characterName: "Sara",
        age: 30,
        died: false,
        movie: suspiria[0]._id
      }
    ]
    
      await Actor.insertMany(actors)
      console.log(`created actors with movies!`)
}
const run = async () => {
    await main()
    db.close()
  }
  
  run()