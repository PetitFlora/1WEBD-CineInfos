
function displayMovies(data, parent, nb) {
    for (let i = 0; i < 10; i++) {
        const movie = data.Search[i];
        if (movie.Poster != 'N/A') {
            const card = document.createElement('div');
            card.className = 'card';
            card.id = (nb - 1) * 10 + i;
            
            const image = document.createElement('img');
            image.src = movie.Poster;
            
            const title = document.createElement('h3');
            title.textContent = movie.Title;
            
            const more = document.createElement('a');
            more.textContent = '...en savoir plus';
            
            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(more);

            card.addEventListener("click", function() {
                const imdb = movie.imdbID;
                window.location.href = `movie.html?imdbID=${imdb}`;
            });
            
            parent.appendChild(card);
        }
    }
}

function fetchLink(link, button, parent, nb) {
    fetch(link)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error API : ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (!button) {
            parent.innerHTML = "";
        }
        displayMovies(data, parent, nb);
    })
    .catch(error => {
        console.error(`Error : ${error.message}`);
    });
}

export {fetchLink};