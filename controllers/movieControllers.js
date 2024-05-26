const Movie = require(`../models/movie`)
const Actor = require(`../models/actor`)
const Review = require(`../models/review`)

// read
const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllMovies
}