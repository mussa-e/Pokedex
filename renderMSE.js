function renderMain(indexPok, event){
    event.stopPropagation();
    underline("main");

    let pokemon = allPokemonData[indexPok];

    let abilitiesHTML = '';
    for (let indexAbilities = 0; indexAbilities < pokemon.abilities.length; indexAbilities++) {
        let abilityName = pokemon.abilities[indexAbilities].ability.name;
        abilityName = abilityName.charAt(0).toUpperCase() + abilityName.slice(1);
        
        abilitiesHTML +=  abilityName + ", ";
    }



    let refMain = document.getElementById(`card-under-bar-${indexPok}`);
    refMain.innerHTML = "";

    let MainHTML = `
            
                <div class="card-main-div"><p class="main-p1">Height</p><p class="main-p2">: ${pokemon.height/10} m</p></div>
                <div class="card-main-div"><p class="main-p1">Weight</p><p class="main-p2">: ${pokemon.weight/10} kg</p></div>
                <div class="card-main-div"><p class="main-p1">Base experience</p><p class="main-p2">: ${pokemon.base_experience}</p></div>
                <div class="card-main-div"><p class="main-p1">Abilities</p><p class="main-p2">: ${abilitiesHTML}</p></div>
            
        
    `;

    refMain.innerHTML = MainHTML;
}


function renderStats(indexPok, event){
    event.stopPropagation();
    underline("stats");

    let pokemon = allPokemonData[indexPok];

    let refStats = document.getElementById(`card-under-bar-${indexPok}`);
    refStats.innerHTML ="";

    let statsHTML = `<div class="stats">
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
    refStats.innerHTML = statsHTML;
}





// async function renderEvoChain(indexPok, event) {
//     event.stopPropagation();
//     underline("evochain");

//     let pokemon = allPokemonData[indexPok];
//     let image = pokemon.sprites.other["official-artwork"].front_default;

//     let evomonUrl = allPokemonData[indexPok].species.url;
//     let evomonApi = await fetch(evomonUrl);
//     let evomonApiJson = await evomonApi.json();

//     let evoChainUrl = evomonApiJson.evolution_chain.url;
//     let chainApi = await fetch(evoChainUrl);
//     let chainApiJson = await chainApi.json();

//     // Extrahiere Evolutionsnamen
//     let chain = chainApiJson.chain;
//     let evoNames = [];

//     while (chain) {
//         evoNames.push(chain.species.name);
//         chain = chain.evolves_to[0];  // gehe zur nächsten Stufe, falls vorhanden
//     }

//     // Baue HTML dynamisch basierend auf Anzahl Evolutionsstufen
//     let evoHTML = `<div class="evo">`;

//     for (let i = 0; i < evoNames.length; i++) {
//         evoHTML += `<div class="evo-chain"><img src="${image}"><p>${evoNames[i]}</p></div>`;
//         if (i < evoNames.length - 1) {
//             evoHTML += `<div><i class="fa-solid fa-angles-right"></i></div>`;
//         }
//     }

//     evoHTML += `</div>`;

//     let refEvo = document.getElementById(`card-under-bar-${indexPok}`);
//     refEvo.innerHTML = evoHTML;
// }

async function renderEvoChain(indexPok, event) {
    event.stopPropagation();
    underline("evochain");
    getPokemons();

    let evomonUrl = allPokemonData[indexPok].species.url;
    let evomonApi = await fetch(evomonUrl);
    let evomonApiJson = await evomonApi.json();

    let evoChainUrl = evomonApiJson.evolution_chain.url;
    let chainApi = await fetch(evoChainUrl);
    let chainApiJson = await chainApi.json();

    // Extrahiere Evolutionsnamen
    let chain = chainApiJson.chain;
    let evoNames = [];

    while (chain) {
        evoNames.push(chain.species.name);
        chain = chain.evolves_to[0];  // gehe zur nächsten Stufe
    }

    // HTML zusammenbauen
    let evoHTML = `<div class="evo">`;

    for (let i = 0; i < evoNames.length; i++) {
        const evoName = evoNames[i];

        // Suche das passende Bild im pokemons-Array
        const match = pokemons.find(p => p.name === evoName);
        const imgSrc = match?.image || '';

        evoHTML += `
            <div class="evo-chain">
                <img src="${imgSrc}">
                <p>${evoName}</p>
            </div>`;

        if (i < evoNames.length - 1) {
            evoHTML += `<div><i class="fa-solid fa-angles-right"></i></div>`;
        }
    }

    evoHTML += `</div>`;

    let refEvo = document.getElementById(`card-under-bar-${indexPok}`);
    refEvo.innerHTML = evoHTML;
}
