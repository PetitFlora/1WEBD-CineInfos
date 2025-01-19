
































































const tendance = document.getElementById("tendances")
const button = document.getElementById('more')
let currentPage = 1;
let link = `https://www.omdbapi.com/?apikey=be13b74f&type=movie&y=2024&s=space&page=${currentPage}`

function displayMovies(data) {
    for (let i = 0; i < 10; i++) {
        const movie = data.Search[i]
        if (movie.Poster != 'N/A') {
            const card = document.createElement('div');
            card.className = 'card';
            
            const image = document.createElement('img');
            image.src = movie.Poster;
            
            const title = document.createElement('h3');
            title.textContent = movie.Title;
            
            const plot = document.createElement('p');
            plot.textContent = 'résumé';
            
            const more = document.createElement('a');
            more.textContent = '...en savoir plus';
            
            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(plot);
            card.appendChild(more);
            
            tendance.appendChild(card);
        }
    }
}

function fetchLink(link) {
    fetch(link)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error API : ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        displayMovies(data);
    })
    .catch(error => {
        console.error(`Error : ${error.message}`)
    })
}

fetchLink(link);

button.addEventListener("click", function(){
    currentPage += 1;
    link = `https://www.omdbapi.com/?apikey=be13b74f&type=movie&y=2024&s=space&page=${currentPage}`
    fetchLink(link)
})