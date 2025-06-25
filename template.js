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
    allPokemon[indexPok] = apiJson;
    
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
        abilitiesHTML +=  abilityName;
        if (indexAbilities < pokemon.abilities.length - 1) {
        abilitiesHTML += ", ";
    }
    }

    let typeIconsHtml = "";
    for (let indexType = 0; indexType < pokemon.types.length; indexType++) {
        let typeName = pokemon.types[indexType].type.name;
        let typeIcon = typeIcons[typeName] || "";
        typeIconsHtml += `<img src="${typeIcon}">`;
    }

    return `
        <div class="card">
            <h2>#${indexPok + 1} ${name.charAt(0).toUpperCase()+name.slice(1)}</h2>
            <div class="card-image bg_${pokemon.types[0].type.name}">
                <div class="arrow"><i onclick="skipLeft(${indexPok}, event)" class="fa-solid fa-reply border-solid-ring"></i></div>
                    <img src="${image}">
                <div class="arrow"><i onclick="skipRight(${indexPok}, event)" class="fa-solid fa-share border-solid-ring"></i></div>
            </div>

            <div class="bar">
                <p id="main" class="border" onclick="renderMain(${indexPok}, event)">main</p>
                <p id="stats" onclick="renderStats(${indexPok}, event)">stats</p>
                <p id="evochain" onclick="renderEvoChain(${indexPok}, event)">evo chain</p>
            </div>

            <div class="card-type">${typeIconsHtml}</div>

            <div id="card-under-bar-${indexPok}" class="card-under-bar">
                <div class="card-main-div"><p class="main-p1">Height :</p><p class="main-p2">${pokemon.height/10} m</p></div>
                <div class="card-main-div"><p class="main-p1">Weight :</p><p class="main-p2">${pokemon.weight/10} kg</p></div>
                <div class="card-main-div"><p class="main-p1">Base experience :</p><p class="main-p2">${pokemon.base_experience}</p></div>
                <div class="card-main-div"><p class="main-p1">Abilities :</p><p class="main-p2">${abilitiesHTML}</p></div>
            </div>
        </div>
    `;
}


function getButtonWrapper(){
    return `
        <div class="button-wrapper" id="button-wrapper">
            <button id="btn" class="btn" onclick="loadMore()">Load more</button>
        </div>
    `;
}


function getMainTemplate(indexPok){
    let pokemon = allPokemonData[indexPok];
    let abilitiesHTML = '';
    for (let indexAbilities = 0; indexAbilities < pokemon.abilities.length; indexAbilities++) {
        let abilityName = pokemon.abilities[indexAbilities].ability.name;
        abilityName = abilityName.charAt(0).toUpperCase() + abilityName.slice(1);
        abilitiesHTML +=  abilityName;
        if (indexAbilities < pokemon.abilities.length - 1) {
        abilitiesHTML += ", ";
    }
    }
    return `
                <div class="card-main-div"><p class="main-p1">Height :</p><p class="main-p2">${pokemon.height/10} m</p></div>
                <div class="card-main-div"><p class="main-p1">Weight :</p><p class="main-p2">${pokemon.weight/10} kg</p></div>
                <div class="card-main-div"><p class="main-p1">Base experience :</p><p class="main-p2">${pokemon.base_experience}</p></div>
                <div class="card-main-div"><p class="main-p1">Abilities :</p><p class="main-p2">${abilitiesHTML}</p></div>
    `;
}


function getStatsTemplate(pokemon){
    return `<div class="stats">
            <div class="stats-div">
                <p>hp</p>
                
                <div class="progress">
                <div class="p-bar" style="width: ${pokemon.stats[0].base_stat / 255 * 100}%"></div>
                </div>
            </div>

            <div class="stats-div">
                <p>attack</p>
                
                <div class="progress">
                <div class="p-bar" style="width: ${pokemon.stats[1].base_stat / 255 * 100}%"></div>
                </div>
            </div>

            <div class="stats-div">
                <p>defense</p>
                
                <div class="progress">
                <div class="p-bar" style="width: ${pokemon.stats[2].base_stat / 255 * 100}%"></div>
                </div>
            </div>

            <div class="stats-div">
                <p>special-attack</p>
                
                <div class="progress">
                <div class="p-bar" style="width: ${pokemon.stats[3].base_stat / 255 * 100}%"></div>
                </div>
            </div>

            <div class="stats-div">
                <p>special-defense</p>
                
                <div class="progress">
                <div class="p-bar" style="width: ${pokemon.stats[4].base_stat / 255 * 100}%"></div>
                </div>
            </div>

            <div class="stats-div">
                <p>speed</p>
                
                <div class="progress">
                <div class="p-bar" style="width: ${pokemon.stats[5].base_stat / 255 * 100}%"></div>
                </div>
            </div>
            </div>

                    `;
}


function getEvoChainTemplate(evoNames) {
    let evoHTML = `<div class="evo">`;

    for (let i = 0; i < evoNames.length; i++) {
        const evoName = evoNames[i];

        const match = pokemons.find(p => p.name === evoName);
        const imgSrc = match?.image || '';

        evoHTML += `
            <div class="evo-chain">
                <img src="${imgSrc}">
                <p>${evoName.charAt(0).toUpperCase()+evoName.slice(1)}</p>
            </div>`;

        if (i < evoNames.length - 1) {
            evoHTML += `<div class="chain-arrow"><i class="border-ring fa-solid fa-angles-right"></i></div>`;
        }
    }

    evoHTML += `</div>`;
    return evoHTML;
}





