function getPokTemplate(apiJson, indexPok, pokemonData) {
    
    let typeIconsHtml = "";
    for (let indexType = 0; indexType < pokemonData.types.length; indexType++) {
        let typeName = pokemonData.types[indexType].type.name;
        let typeIcon = typeIcons[typeName] || "";
        typeIconsHtml += `<img src="${typeIcon}" class="type-icon"> `;
    }

    return `
                <div class="pokdek">
                    <div class="pokdek-head">
                        #${indexPok + 1} ${apiJson.results[indexPok].name.charAt(0).toUpperCase() 
                            + apiJson.results[indexPok].name.slice(1)}
                    </div>

                    <div class="bg_${pokemonData.types[0].type.name}">
                    <img class="pixel-art" src="${pokemonData.sprites.other["official-artwork"].front_default}">
                    </div>

                    <div class="pokdek-foot">
                        ${typeIconsHtml}
                    </div>
                </div>`;
}


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


