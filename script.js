let button = document.querySelector("#searchButton")
let movieTitle = document.querySelector("#movieTitle")
let inputBar = document.querySelector("#inputBar")
let desc = document.querySelector("#description")

// Assuming you have an img element with id "posterImage"
let posterImage = document.getElementById("posterImage")

button.addEventListener('click', async () => {
    try {
        let title = inputBar.value
        let response = await axios.get(`http://localhost:3001/movies/:title`)
        let movieData = response.data

        movieTitle.innerText = movieData.title
        desc.innerHTML = movieData.description

        posterImage.src = movieData.poster_image

    } catch (error) {
        console.error('Error:', error)
    }
})

