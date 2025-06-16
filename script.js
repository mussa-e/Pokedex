let base_url_20 = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
let base_url_40 = "https://pokeapi.co/api/v2/pokemon?limit=40&offset=0";


function init(){
    fetchPoks();
    

}


function loadingSpinner() {

}


async function fetchPoks() {
    loadingSpinner();
    
    let api = await fetch(base_url_20);
    let apiJson = await api.json();

    renderPoks(apiJson);
    
}

async function renderPoks(apiJson){
    let contentRef = document.getElementById("gallery");
    contentRef.innerHTML = "";

    for (let indexPok = 0; indexPok < apiJson.results.length; indexPok++) {
        
        let pokemonUrl = apiJson.results[indexPok].url;
        let responsePokemonUrl = await fetch(pokemonUrl);
        let pokemonData = await responsePokemonUrl.json();
        
        
        
        contentRef.innerHTML += getPokTemplate(apiJson, indexPok, pokemonData);
        
    }
}


function loadMore(){
    base_url_20 = base_url_40;
    fetchPoks();
}

