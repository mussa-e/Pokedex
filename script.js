let base_url = "https://pokeapi.co/api/v2/pokemon?limit=40&offset=0";


function init(){
    fetchPoks();
    

}

async function fetchPoks() {
    let api = await fetch(base_url);
    let apiJson = await api.json();
    console.log(apiJson);

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

