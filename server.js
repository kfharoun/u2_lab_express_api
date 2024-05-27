const express = require('express')
const db = require('./db')
const movieControllers = require('./controllers/movieControllers')
const bodyParser = require('body-parser')
const logger = require('morgan')

const PORT = process.env.PORT || 3001

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
const cors = require('cors')
app.use(cors())

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('This is our root page!')
})

app.get('/movies', movieControllers.getAllMovies)

app.get('/reviews', movieControllers.getAllReviews)

app.get(`/actors`, movieControllers.getAllActors)

//  I want to sort my reviews by ascending or descending order
app.get(`/reviews/ascending`, movieControllers.getAscendingReviews)

app.get(`/reviews/descending`, movieControllers.getDescendingReviews)

// I want to sort my movies by newest or oldest

app.get(`/movie/date`, movieControllers.sortMoviesByDate)

// I want an error message to display if I search for an Actor, Movie, or Review with an incorrect ID

app.get(`/movie/:id`, movieControllers.getInfoById)

// create
app.post(`/movies`, movieControllers.createMovie)
 
// update
app.put(`/movie/:id`, movieControllers.updateMovie)

// delete 

app.delete('/movie/:id', movieControllers.deleteMovie)

// find by title

app.get(`/movies/:title`, movieControllers.byTitle)