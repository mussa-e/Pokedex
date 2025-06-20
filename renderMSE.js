function renderMain(indexPok, event){
    event.stopPropagation();

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





function renderEvoChain(indexPok, event){
    event.stopPropagation();

    let evomon = allPokemon[indexPok];

    let refEvo = document.getElementById(`card-under-bar-${indexPok}`);
    refEvo.innerHTML ="";

    let evoHTML = `<div class="evo">
                        <div><img><p>${evomon.results[indexPok].name}</p></div>
                        <div><i class="fa-solid fa-angles-right"></i></div>
                        <div><img><p>${evomon.results[indexPok+1].name}</p></div>
                        <div><i class="fa-solid fa-angles-right"></i></div>
                        <div><img><p>${evomon.results[indexPok+2].name}</p></div>
                    </div>
                    `;
    refEvo.innerHTML = evoHTML;
    
}