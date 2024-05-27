const { Movie, Actor, Review } = require('../models')
const mongoose = require('mongoose')

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.aggregate([
            {
                $lookup: {
                    from: 'actors',
                    localField: '_id',
                    foreignField: 'movie',
                    as: 'actors'
                }
            },
            {
                $lookup: {
                    from: 'reviews',
                    localField: '_id',
                    foreignField: 'movie',
                    as: 'reviews'
                }
            }
        ])

        res.json(movies)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllActors = async (req, res) => {
    try {
        const actors = await Actor.find({})
        res.json(actors)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({})
        res.json(reviews)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// https://www.mongodb.com/docs/manual/reference/operator/aggregation/lookup/
// https://www.mongodb.com/docs/manual/reference/operator/aggregation/reverseArray/
// https://www.mongodb.com/community/forums/t/sorting-with-mongoose-and-mongodb/122573
const getAscendingReviews = async (req, res) => {
    try {
        const ascending = await Movie.aggregate([
            {
                $lookup: {
                    from: 'reviews', 
                    localField: '_id',
                    foreignField: 'movie',
                    as: 'reviews'
                }
            },
            {
                $addFields: {
                    averageRating: { $avg: "$reviews.rating" } 
                }
            },
            {
                        $sort: { rating: 1 }
                }
        ])

        res.json(ascending)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getDescendingReviews = async (req, res) => {
    try {
        const descending = await Movie.aggregate([
            {
                $lookup: {
                    from: 'reviews', 
                    localField: '_id',
                    foreignField: 'movie',
                    as: 'reviews'
                }
            },
            {
                $addFields: {
                    averageRating: { $avg: "$reviews.rating" } 
                }
            },
            {
                $sort: { averageRating: -1 } 
            },
            {
                $addFields: {
                    reviews: {
                        $reverseArray: "$reviews" 
                    }
                }
            }
        ])

        res.json(descending)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const sortMoviesByDate = async (req, res) => {
    try {
        const sortedMovies = await Movie.find({}).sort({ yearReleased: -1 })

        res.json(sortedMovies)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
// https://www.mongodb.com/docs/manual/reference/operator/aggregation/lookup/
const getInfoById = async (req, res) => {
    try {
        const { id } = req.params;

        const movie = await Movie.aggregate([
            { $match: { _id: new mongoose.Types.ObjectId(id) } }, 
            {
                $lookup: {
                    from: 'actors',
                    localField: '_id',
                    foreignField: 'movie',
                    as: 'actors'
                }
            },
            {
                $lookup: {
                    from: 'reviews',
                    localField: '_id',
                    foreignField: 'movie',
                    as: 'reviews'
                }
            }
        ])

        if (id) {
            return res.json(movie)
        }
        return res.status(404).send(`Invalid Movie ID, please try again`)
    } catch (error) {
        return res.status(500).json({error: error.message})
        }
}

const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Movie.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Movie deleted")
        }
        throw new Error("Movie not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateMovie = async (req, res) => {
    try {
        let { id } = req.params;
        let movie = await Movie.findByIdAndUpdate(id, req.body, { new: true })
        if (movie) {
            return res.status(200).json(movie)
        }
        throw new Error("Movie not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createMovie = async (req, res) => {
    try {
        const movie = await new Movie(req.body)
        await movie.save()
        return res.status(201).json({
            movie
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const byTitle = async (req, res) => {
    try {
        const { title } = req.params
        
        const movies = await Movie.aggregate([
            { //https://www.geeksforgeeks.org/mongodb-query-with-case-insensitive-search/
                // i stands for case insensitive 
                $match: { title: { $regex: new RegExp(title, 'i') } }
            },
            {
                $lookup: {
                    from: 'actors',
                    localField: '_id',
                    foreignField: 'movie',
                    as: 'actors'
                }
            },
            {
                $lookup: {
                    from: 'reviews',
                    localField: '_id',
                    foreignField: 'movie',
                    as: 'reviews'
                }
            }
        ])

        res.json(movies)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

    
module.exports = {
    getAllMovies,
    getAllActors,
    getAllReviews, 
    getAscendingReviews, 
    getDescendingReviews,
    sortMoviesByDate, 
    getInfoById, 
    deleteMovie, 
    updateMovie, 
    createMovie, 
    byTitle
}
