let typeIcons = {
    bug: "./img/bug.svg",
    electric: "./img/electric.svg",
    fairy: "./img/fairy.svg",
    fire: "./img/fire.svg",
    flying: "./img/flying.svg",
    grass: "./img/grass.svg",
    ground: "./img/ground.svg",
    normal: "./img/normal.svg",
    poison: "./img/poison.svg",
    water: "./img/water.svg"
};


function getPokTemplate(apiJson, indexPok, pokemonApiJson) {

    allPokemonData[indexPok] = pokemonApiJson;
    
    let typeIconsHtml = "";
    for (let indexType = 0; indexType < pokemonApiJson.types.length; indexType++) {
        let typeName = pokemonApiJson.types[indexType].type.name;
        let typeIcon = typeIcons[typeName] || "";
        typeIconsHtml += `<img src="${typeIcon}" class="type-icon"> `;
    }

    return `
                <div id="${indexPok}" onclick="showCard(${indexPok})" class="pokdek">
                    <div class="pokdek-head">
                        #${indexPok + 1} ${apiJson.results[indexPok].name.charAt(0).toUpperCase() 
                            + apiJson.results[indexPok].name.slice(1)}
                    </div>

                    <div class="bg_${pokemonApiJson.types[0].type.name}">
                    <img class="pixel-art" src="${pokemonApiJson.sprites.other["official-artwork"].front_default}">
                    </div>

                    <div class="pokdek-foot">
                        ${typeIconsHtml}
                    </div>
                </div>`;
}


function getCardTemplate(indexPok){
    let pokemon = allPokemonData[indexPok];
    let name = pokemon.name;
    let image = pokemon.sprites.other["official-artwork"].front_default;

    return `
        <div class="card">
            <h2>#${indexPok + 1} ${name}</h2>
            <div class="card-image">
            <img src="${image}" >
            </div>

        <div>
        </div>
        <div class="bar">
            <p>main</p>
            <p>stats</p>
            <p>evo chain</p>
        </div>
        <div>
            <p></p><p></p>
            <p></p><p></p>
            <p></p><p></p>
            <p></p><p></p>
        </div>

        </div>
        
    `
}





