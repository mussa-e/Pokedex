let allPokemon = [];
let allPokemonData = [];
let currentOffset = 0;
let limit = 20;




function init(){
    fetchPoks();
}


async function fetchPoks(limit) {
    let baseUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`;

    try {
        let api = await fetch(baseUrl);
        let apiJson = await api.json();
        renderPoks(apiJson);
    } catch (error) {
        console.error("Fehler beim Abrufen der Pokémon:", error);
    }
}



async function renderPoks(apiJson){
    let contentRef = document.getElementById("gallery");
    contentRef.innerHTML = "";

    for (let indexPok = 0; indexPok < apiJson.results.length; indexPok++) {
        let pokemonUrl = apiJson.results[indexPok].url;
        let PokemonApi = await fetch(pokemonUrl);
        let pokemonApiJson = await PokemonApi.json();

        // allPokemonData.push(pokemonApiJson);  // <== Wichtig!
        allPokemon.push(apiJson); 

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

    checkSkipRight(indexPok);
    checkSkipLeftTwo(indexPok);
}


function template(){
    let overlay = document.getElementById("overlay");
    overlay.classList.toggle("d-none");

    document.getElementById("main-div").classList.toggle("blurred");
    document.getElementById("footer").classList.toggle("blurred");
    document.getElementById("header").classList.toggle("blurred");
}


function loadMore() {
    limit += 20;
    spinner();
    fetchPoks(limit);
    console.log(limit);
    
}



function spinner() {
  let spinnerOverlay = document.getElementById('spinner-overlay');
  spinnerOverlay.style.display = 'flex';

  setTimeout(() => {
    spinnerOverlay.style.display = 'none';
    
  }, 1000);
}
















