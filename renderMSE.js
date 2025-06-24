function renderMain(indexPok, event){

    event.stopPropagation();
    underline("main");

    let refMain = document.getElementById(`card-under-bar-${indexPok}`);
    refMain.innerHTML = "";
    refMain.innerHTML = getMainTemplate(indexPok);
}


function renderStats(indexPok, event){
    
    event.stopPropagation();
    underline("stats");

    let pokemon = allPokemonData[indexPok];

    let refStats = document.getElementById(`card-under-bar-${indexPok}`);
    refStats.innerHTML ="";
    refStats.innerHTML = getStatsTemplate(pokemon);
}


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
            evoHTML += `<div><i class="border-ring fa-solid fa-angles-right"></i></div>`;
        }
    }

    evoHTML += `</div>`;

    let refEvo = document.getElementById(`card-under-bar-${indexPok}`);
    refEvo.innerHTML = evoHTML;
}
