
const results = document.getElementById("results");
const searchBar = document.getElementById("search");
const button = document.getElementById('more');
let currentPage = 1;

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
            
            const more = document.createElement('a');
            more.textContent = '...en savoir plus';
            
            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(plot);
            card.appendChild(more);
            
            results.appendChild(card);
        }
    }
}

function fetchLink(link, button) {
    fetch(link)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error API : ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (!button) {
            results.innerHTML = "";
        }
        displayMovies(data);
    })
    .catch(error => {
        console.error(`Error : ${error.message}`)
    })
}

searchBar.addEventListener("input", function(e){
    currentPage = 1;
    let link = `https://www.omdbapi.com/?apikey=be13b74f&type=movie&y=2024&s=${searchBar.value}&page=${currentPage}`;
    fetchLink(link, false);
})

button.addEventListener("click", function(){
    currentPage += 1;
    console.log(currentPage);
    link = `https://www.omdbapi.com/?apikey=be13b74f&type=movie&y=2024&s=${searchBar.value}&page=${currentPage}`;
    fetchLink(link, true);
})
