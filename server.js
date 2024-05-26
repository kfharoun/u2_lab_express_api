const express = require(`express`)
const db = require(`./db`)
const movieControllers = require(`./controllers/movieControllers`)
const bodyParser = require('body-parser')
const logger = require(`morgan`)

const PORT = process.env.PORT || 3001

const app = express()
app.use(logger(`dev`))
app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => {
  res.send('This is our root page!')
})

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })