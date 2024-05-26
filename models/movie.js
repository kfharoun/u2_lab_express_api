const  { Schema } = require('mongoose')

const MovieSchema = new Schema(
    {
        title: { type: String, required: true },
        runTime: { type: String, required: true },
        yearReleased: { type: Number, required: true}, 
        description: {type: String, required: true}, 
        poster_image: {type: String, required: true}
    },
    { timestamps: true },
)

module.exports = MovieSchema