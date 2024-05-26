const db = require('../db')
const { Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const movies =
  [
    {
      title: "The Love Witch",
      runTime: "2 hours",
      yearReleased: 2016,
      description: "Elaine (Samantha Robinson), a beautiful young witch, is determined to find a man to love her. In her gothic Victorian apartment she makes spells and potions, then picks up men and seduces them. However, her spells work too well, and she ends up with a string of hapless victims. When she at last meets the man of her dreams, her desperation to be loved drives her to the brink of insanity and murder.",
      poster_image: "https://m.media-amazon.com/images/M/MV5BMjA5NDEyMjQwNV5BMl5BanBnXkFtZTgwNDQ1MjMwMDI@._V1_.jpg"
    },
    {
      title: "The Witch",
      runTime: "1 hour 32 minutes",
      yearReleased: 2015,
      description: "In 1630s New England, William and Katherine lead a devout Christian life with five children, homesteading on the edge of an impassable wilderness. When their newborn son vanishes and crops fail, the family turns on one another. Beyond their worst fears, a supernatural evil lurks in the nearby wood.",
      poster_image: "https://m.media-amazon.com/images/M/MV5BNzMwNzQ4MTY3N15BMl5BanBnXkFtZTgwMTUxMTYxNDI@._V1_.jpg"
    },
    {
      title: "Practical Magic",
      runTime: "1 hour 44 minutes",
      yearReleased: 1998,
      description: "Sally and Gillian Owens, born into a magical family, have mostly avoided witchcraft themselves. But when Gillian's vicious boyfriend, Jimmy Angelov, dies unexpectedly, the Owens sisters give themselves a crash course in hard magic. With policeman Gary Hallet growing suspicious, the girls struggle to resurrect Angelov -- and unwittingly inject his corpse with an evil spirit that threatens to end their family line.",
      poster_image: "https://m.media-amazon.com/images/M/MV5BMTc2MDk3Mzg4N15BMl5BanBnXkFtZTYwOTMzMDk2._V1_.jpg"
    },
    {
      title: "The Craft",
      runTime: "1 hour 41 minutes",
      yearReleased: 1996,
      description: "A Catholic school newcomer falls in with a clique of teen witches who wield their powers against all who dare to cross them -- be they teachers, rivals, or meddlesome parents.",
      poster_image: "https://m.media-amazon.com/images/M/MV5BNTg0MzI3ODUyNV5BMl5BanBnXkFtZTcwMDQ3ODQ2Nw@@._V1_.jpg"
    },
    {
      title: "Suspiria",
      runTime: "2 hours 32 minutes",
      yearReleased: 2018,
      description: "A darkness swirls at the center of a world-renowned dance company, one that will engulf the artistic director, an ambitious young dancer, and a grieving psychotherapist. Some will succumb to the nightmare. Others will finally wake up.",
      poster_image: "https://m.media-amazon.com/images/M/MV5BMTc4ODExMDg5N15BMl5BanBnXkFtZTgwMzQ0ODUxNTM@._V1_.jpg"
    }
  ]
  await Movie.insertMany(movies)
  console.log(`created movies!`)
}
const run = async () => {
    await main()
    db.close()
  }
  
  run()
