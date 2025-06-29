


function getPokTemplateFromData(pokemonData) {
    return `
        <div id="${pokemonData.id}" onclick="showCard(${pokemonData.id})" class="pokdek">
            <div class="pokdek-head">
                #${pokemonData.id + 1} ${pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}
            </div>
            <div class="${pokemonData.bgClass}">
                <img class="pixel-art" src="${pokemonData.image}">
            </div>
            <div class="pokdek-foot">
                ${pokemonData.typeIconsHtml}
            </div>
        </div>`;
}


function getCardTemplate(indexPok, name, image, pokemon, abilitiesHTML, typeIconsHTML) {
    return `
        <div class="card">
            <h2>#${indexPok + 1} ${name}</h2>
            <div class="card-image bg_${pokemon.types[0].type.name}">
                <div id="arrow-left" class="arrow"><i onclick="skipLeft(${indexPok}, event)" class="fa-solid fa-reply border-solid-ring"></i></div>
                <img src="${image}">
                <div id="arrow-right" class="arrow"><i onclick="skipRight(${indexPok}, event)" class="fa-solid fa-share border-solid-ring"></i></div>
            </div>

            <div class="bar">
                <p id="main" class="border" onclick="renderMain(${indexPok}, event)">main</p>
                <p id="stats" onclick="renderStats(${indexPok}, event)">stats</p>
                <p id="evochain" onclick="renderEvoChain(${indexPok}, event)">evo chain</p>
            </div>

            <div class="card-type">${typeIconsHTML}</div>

            <div id="card-under-bar-${indexPok}" class="card-under-bar">
                <div class="card-main-div"><p class="main-p1">Height :</p><p class="main-p2">${pokemon.height / 10} m</p></div>
                <div class="card-main-div"><p class="main-p1">Weight :</p><p class="main-p2">${pokemon.weight / 10} kg</p></div>
                <div class="card-main-div mg-b"><p class="main-p1">Base<br> experience :</p><p class="main-p2">${pokemon.base_experience}</p></div>
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


function getMainTemplate(height, weight, baseExp, abilitiesHTML) {
    return `
        <div class="card-main-div"><p class="main-p1">Height :</p><p class="main-p2">${height} m</p></div>
        <div class="card-main-div"><p class="main-p1">Weight :</p><p class="main-p2">${weight} kg</p></div>
        <div class="card-main-div"><p class="main-p1">Base experience :</p><p class="main-p2">${baseExp}</p></div>
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


function getEvoChainTemplate(evoData) {
    let evoHTML = `<div id="evo" class="evo">`;

    evoData.forEach(({ name, imgSrc, showArrow }) => {
        evoHTML += `
            <div class="evo-chain">
                <img src="${imgSrc}">
                <p>${name}</p>
            </div>`;
        if (showArrow) {
            evoHTML += `<div class="chain-arrow"><i class="border-ring fa-solid fa-angles-right"></i></div>`;
        }
    });

    evoHTML += `</div>`;
    return evoHTML;
}


function showEvoSpinner(container) {
    container.innerHTML = `
        <div class="evo-spinner">
            <div class="spinner-border">
            </div>
        </div>
    `;
}




