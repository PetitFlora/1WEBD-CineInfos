
import {fetchLink} from './shared_features.js';

const cards = document.getElementsByClassName("card")
const results = document.getElementById("results");
const searchBar = document.getElementById("search");
const button = document.getElementById('more');
let link;
let currentPage = 1;

searchBar.addEventListener("input", function() {
    currentPage = 1;
    link = `https://www.omdbapi.com/?apikey=be13b74f&type=movie&s=${searchBar.value}&page=${currentPage}`;
    fetchLink(link, false, results, currentPage);
});

button.addEventListener("click", function() {
    currentPage += 1;
    link = `https://www.omdbapi.com/?apikey=be13b74f&type=movie&s=${searchBar.value}&page=${currentPage}`;
    fetchLink(link, true, results, currentPage);
});
