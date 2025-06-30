function renderMain(indexPok, event) {
    event.stopPropagation();
    underline("main");

    const pokemon = allPokemonData[indexPok];
    const height = pokemon.height / 10;
    const weight = pokemon.weight / 10;
    const baseExp = pokemon.base_experience;
    const abilitiesHTML = getAbilitiesHTML(pokemon);

    const refMain = document.getElementById(`card-under-bar-${indexPok}`);
    refMain.innerHTML = getMainTemplate(height, weight, baseExp, abilitiesHTML);
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

    const refEvo = document.getElementById(`card-under-bar-${indexPok}`);
    showEvoSpinner(refEvo);
    
    await getPokemons();
    const evoNames = await getEvolutionNames(indexPok);
    const evoData = prepareEvoChainData(evoNames);
    const evoHTML = getEvoChainTemplate(evoData);
    
    setTimeout(() => {
        refEvo.innerHTML = evoHTML;
    }, 500);
}


function prepareEvoChainData(evoNames) {
    return evoNames.map((name, i) => {
        const match = pokemons.find(p => p.name === name);
        return {
            name: capitalize(name),
            imgSrc: match?.image || "",
            showArrow: i < evoNames.length - 1
        };
    });
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



