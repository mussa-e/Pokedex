let base_url_20 = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
let base_url_40 = "https://pokeapi.co/api/v2/pokemon?limit=40&offset=0";


let allPokemon = [];
let allPokemonData = [];


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

    let buttonWrapper = `
        <div class="button-wrapper" id="button-wrapper">
            <button id="btn" class="btn" onclick="loadMore()">Load more</button>
        </div>
    `;
    contentRef.innerHTML += buttonWrapper;
    
}


function loadMore() {
    base_url_20 = base_url_40;
    fetchPoks();
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







