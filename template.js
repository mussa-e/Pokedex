function getPokTemplate(apiAsJson, indexPok, pokemonData){
    return `
        <div>
            <p>#${[indexPok+1]} ${apiAsJson.results[indexPok].name}</p>
            <img src="${pokemonData.sprites.front_default}">

        </div>`;
}