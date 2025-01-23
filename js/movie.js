
const filmTitle = document.getElementById("film-title");
const filmInfos = document.getElementById("film-infos");
const filmPlot = document.getElementById("film-plot");

const urlPara = new URLSearchParams(window.location.search);
const filmID = urlPara.get('imdbID')
console.log(filmID);
let link = `https://www.omdbapi.com/?apikey=be13b74f&i=${filmID}&plot=full`;

function displayFilmInfos(data){
    filmTitle.textContent = data.Title;

    const image = document.createElement('img');
    image.src = data.Poster;

    const divInfos = document.createElement('div');
    divInfos.className = "infos";

    const pInfos = document.createElement('p');
    pInfos.textContent = `Sortie le ${data.Released} | ${data.Runtime} | ${data.Genre}`;

    const director = document.createElement('p');
    director.textContent = `Réalisateur : ${data.Director}`

    const actors = document.createElement('p');
    actors.textContent = `Acteurs : ${data.Actors}`;

    filmPlot.textContent = data.Plot;

    divInfos.appendChild(pInfos);
    divInfos.appendChild(director);
    divInfos.appendChild(actors);

    filmInfos.appendChild(image);
    filmInfos.appendChild(divInfos);
}

fetch(link)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error API : ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        displayFilmInfos(data);
    })
    .catch(error => {
        console.error(`Error : ${error.message}`);
    });