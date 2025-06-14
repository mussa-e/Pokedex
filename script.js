let base_url = "https://pokeapi.co/api/v2/pokemon?limit=40&offset=0";


function init(){
    fetchPoks();
    

}

async function fetchPoks() {
    let api = await fetch(base_url);
    let apiAsJson = await api.json();
    console.log(apiAsJson);

    renderPoks(apiAsJson);
    
}

async function renderPoks(apiAsJson){
    let contentRef = document.getElementById("gallery");
    contentRef.innerHTML = "";

    for (let indexPok = 0; indexPok < apiAsJson.results.length; indexPok++) {
        
        let pokemonUrl = apiAsJson.results[indexPok].url;
        let responsePokemonUrl = await fetch(pokemonUrl);
        let pokemonData = await responsePokemonUrl.json();
        
        
        
        contentRef.innerHTML += getPokTemplate(apiAsJson, indexPok, pokemonData);
        
    }
}

