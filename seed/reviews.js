const db = require('../db')
const { Movie, Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const loveWitch = await Movie.findOne({ title: "The Love Witch" })
  const theWitch = await Movie.findOne({ title: "The Witch" })
  const practicalMagic = await Movie.findOne({ title: "Practical Magic" })
  const theCraft = await Movie.findOne({ title: "The Craft" })
  const suspiria = await Movie.findOne({ title: "Suspiria" })

  const reviews = [
    // Reviews for "The Love Witch"
    {
      score: 4,
      comment: "A hilarious and pointed examination of sexuality through meticulous retro pastiche with some highly entertaining performances, The Love Witch revels in its blend of thoughtfulness with B-movie camp. Anna Biller, with no digital effects whatsoever, has created an extremely lavish, weird and wonderful modern sexploitation film.",
      movie: loveWitch._id
    },
    {
      score: 5,
      comment: "The Love Witch is an exhilarating visual feast, a delightful throwback to the technicolor melodramas of the 1960s and '70s. Samantha Robinson's captivating performance as Elaine, a modern-day witch in search of love, is spellbinding.",
      movie: loveWitch._id
    },
    // Reviews for "The Witch"
    {
      score: 5,
      comment: "The Witch is a chilling, atmospheric horror film that transports viewers to the bleak world of 17th-century New England. Anchored by strong performances and a haunting score, this is a must-watch for fans of psychological horror.",
      movie: theWitch._id
    },
    {
      score: 4,
      comment: "The Witch is a beautifully shot and masterfully acted horror film that builds tension slowly, leaving viewers on edge until its chilling conclusion. The film's authentic period setting adds to its sense of dread, making it a standout in the genre.",
      movie: theWitch._id
    },
    // Reviews for "Practical Magic"
    {
      score: 3,
      comment: "Practical Magic is a charming and whimsical romantic comedy that offers a fresh take on witchcraft. While the chemistry between Sandra Bullock and Nicole Kidman is undeniable, the film's plot feels somewhat predictable.",
      movie: practicalMagic._id
    },
    {
      score: 4,
      comment: "Practical Magic is a delightful blend of humor, romance, and magic, with strong performances from its ensemble cast. The film's message about the power of sisterhood resonates long after the credits roll.",
      movie: practicalMagic._id
    },
    // Reviews for "The Craft"
    {
      score: 4,
      comment: "The Craft is a fun and stylish supernatural thriller that explores themes of power, friendship, and identity. With its memorable characters and suspenseful plot, this film remains a cult classic for a reason.",
      movie: theCraft._id
    },
    {
      score: 3,
      comment: "While The Craft boasts a talented young cast and some genuinely spooky moments, its uneven pacing and lackluster character development prevent it from reaching its full potential.",
      movie: theCraft._id
    },
    // Reviews for "Suspiria"
    {
      score: 5,
      comment: "Suspiria is a mesmerizing and atmospheric horror film that defies expectations at every turn. With its haunting visuals, intense performances, and thought-provoking themes, it's a true masterpiece of the genre.",
      movie: suspiria._id
    },
    {
      score: 4,
      comment: "Suspiria is a bold and ambitious reimagining of Dario Argento's classic horror film. While it may not please purists, its striking visuals and unique approach make it a worthy addition to the genre.",
      movie: suspiria._id
    }
  ]

  await Review.insertMany(reviews);
  console.log('Created reviews for movies!')
}

main().catch(console.error)
