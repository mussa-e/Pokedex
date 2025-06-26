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
    await getPokemons();

    const evoNames = await getEvolutionNames(indexPok);
    const evoHTML = getEvoChainTemplate(evoNames);
    updateEvoChainDOM(indexPok, evoHTML);
}


async function getEvolutionNames(indexPok) {
    const speciesUrl = allPokemonData[indexPok].species.url;
    const speciesData = await fetch(speciesUrl);
    const speciesDataJson = await speciesData.json();

    const evoChainUrl = speciesDataJson.evolution_chain.url;
    const evoChainData = await fetch(evoChainUrl);
    const evoChainDataJson = await evoChainData.json();

    const names = [];
    let chain = evoChainDataJson.chain;

    while (chain) {
        names.push(chain.species.name);
        chain = chain.evolves_to[0]; 
    }

    return names;
}


function updateEvoChainDOM(indexPok, evoHTML) {
    const refEvo = document.getElementById(`card-under-bar-${indexPok}`);
    if (refEvo) {
        refEvo.innerHTML = evoHTML;
    }
}



