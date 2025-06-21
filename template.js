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

    allPokemon[indexPok] = apiJson;
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

    let abilitiesHTML = '';
    for (let indexAbilities = 0; indexAbilities < pokemon.abilities.length; indexAbilities++) {
        let abilityName = pokemon.abilities[indexAbilities].ability.name;
        abilityName = abilityName.charAt(0).toUpperCase() + abilityName.slice(1);
        abilitiesHTML +=  abilityName + ", ";
    }


    let typeIconsHtml = "";
    for (let indexType = 0; indexType < pokemon.types.length; indexType++) {
        let typeName = pokemon.types[indexType].type.name;
        let typeIcon = typeIcons[typeName] || "";
        typeIconsHtml += `<img src="${typeIcon}">`;
    }


    
    return `
        <div class="card">
            <h2>#${indexPok + 1} ${name}</h2>
            <div class="card-image bg_${pokemon.types[0].type.name}">
                <div class="arrow"><i onclick="skipLeft(${indexPok}, event)" class="fa-solid fa-reply"></i></div>
                    <img src="${image}">
                <div class="arrow"><i onclick="skipRight(${indexPok}, event)" class="fa-solid fa-share"></i></div>
            </div>

            <div class="bar">
                <p id="main" class="underline" onclick="renderMain(${indexPok}, event)">main</p>
                <p id="stats" onclick="renderStats(${indexPok}, event)">stats</p>
                <p id="evochain" onclick="renderEvoChain(${indexPok}, event)">evo chain</p>
            </div>

            <div class="card-type">${typeIconsHtml}</div>

            <div id="card-under-bar-${indexPok}" class="card-under-bar">
                <div class="card-main-div"><p class="main-p1">Height</p><p class="main-p2">: ${pokemon.height/10} m</p></div>
                <div class="card-main-div"><p class="main-p1">Weight</p><p class="main-p2">: ${pokemon.weight/10} kg</p></div>
                <div class="card-main-div"><p class="main-p1">Base experience</p><p class="main-p2">: ${pokemon.base_experience}</p></div>
                <div class="card-main-div"><p class="main-p1">Abilities</p><p class="main-p2">: ${abilitiesHTML}</p></div>
            </div>
        </div>
    `;
}






