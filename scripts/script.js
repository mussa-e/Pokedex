let base_url_20 = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
let base_url_40 = "https://pokeapi.co/api/v2/pokemon?limit=40&offset=0";
let allPokemon = [];
let allPokemonData = [];
let api = base_url_20;


function init(){
    fetchPoks();
}


async function fetchPoks() {

    let api = await fetch(base_url_20);
    let apiJson = await api.json();

    renderPoks(apiJson);
}


async function renderPoks(apiJson){
    let contentRef = document.getElementById("gallery");
    contentRef.innerHTML = "";

    for (let indexPok = 0; indexPok < apiJson.results.length; indexPok++) {
        let pokemonUrl = apiJson.results[indexPok].url;
        let PokemonApi = await fetch(pokemonUrl);
        let pokemonApiJson = await PokemonApi.json();
        contentRef.innerHTML += getPokTemplate(apiJson, indexPok, pokemonApiJson);
    }

    contentRef.innerHTML += getButtonWrapper();
}


function showCard(indexPok){
    let overlay = document.getElementById("overlay");
    overlay.classList.toggle("d-none");
    
    overlay.innerHTML =  getCardTemplate(indexPok);
    
    document.getElementById("main-div").classList.toggle("blurred");
    document.getElementById("footer").classList.toggle("blurred");
    document.getElementById("header").classList.toggle("blurred");
}


function template(){
    let overlay = document.getElementById("overlay");
    overlay.classList.toggle("d-none");

    document.getElementById("main-div").classList.toggle("blurred");
    document.getElementById("footer").classList.toggle("blurred");
    document.getElementById("header").classList.toggle("blurred");
}


function loadMore() {
    base_url_20 = base_url_40;
    api = base_url_40;
    spinner();
    fetchPoks();
}


function spinner() {
  let spinnerOverlay = document.getElementById('spinner-overlay');
  spinnerOverlay.style.display = 'flex';

  setTimeout(() => {
    spinnerOverlay.style.display = 'none';
    
  }, 1000);
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('inputfield').addEventListener('input', search);
});


function search() {
    let searchValue = document.getElementById('inputfield').value.toLowerCase();
    let container = document.getElementById('gallery');
    container.innerHTML = '';

    let matchesFound = false;

    for (let i = 0; i < allPokemon.length; i++) {
        let name = allPokemon[i].results[i].name.toLowerCase();

        if (name.includes(searchValue)) {
            container.innerHTML += getPokTemplate(allPokemon[i], i, allPokemonData[i]);
            matchesFound = true;
        }
    }

    if (!matchesFound) {
        container.innerHTML = `<div class="search-user-feedback">No matches found</div>`;
    }
}


function underline(active) {
    let main = document.getElementById("main");
    let stats = document.getElementById("stats");
    let evochain = document.getElementById("evochain");

    main.classList.remove("border");
    stats.classList.remove("border");
    evochain.classList.remove("border");

    if (active === "main") {
        main.classList.add("border");
    } else if (active === "stats") {
        stats.classList.add("border");
    } else if (active === "evochain") {
        evochain.classList.add("border");
    }
}







