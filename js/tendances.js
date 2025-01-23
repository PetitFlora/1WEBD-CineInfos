
import {fetchLink} from './shared_features.js';

const tendance = document.getElementById("tendances");
const button2024 = document.getElementById('more2024');
let currentPage = 1;
let link = `https://www.omdbapi.com/?apikey=be13b74f&type=movie&y=2024&s=space&page=${currentPage}`;

fetchLink(link, false, tendance, currentPage);

button2024.addEventListener("click", function() {
    currentPage += 1;
    link = `https://www.omdbapi.com/?apikey=be13b74f&type=movie&y=2024&s=space&page=${currentPage}`;
    fetchLink(link, true, tendance, currentPage);
});
