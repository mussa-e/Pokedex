function renderMain(indexPok, event){
}


function renderStats(indexPok, event){
    event.stopPropagation();

    let refStats = document.getElementById(`card-under-bar-${indexPok}`);
    refStats.innerHTML ="";

    let statsHTML = `<div class="stats">
                        <div><p>hp</p></div>
                        <div><p>attack</p></div>
                        <div><p>defense</p></div>
                        <div><p>special-attack</p></div>
                        <div><p>special-defense</p></div>
                        <div><p>speed</p></div>
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