function getPokTemplate(apiJson, indexPok, pokemonData){

    let type = pokemonData.types[0].type.name;
    const typeIcon = typeIcons[type] || "";

    return `
        <div class="pokdek">

            <p>
                #${indexPok + 1} ${apiJson.results[indexPok].name.charAt(0).toUpperCase() + apiJson.results[indexPok].name.slice(1)}
            </p>


            
            <img src="${pokemonData.sprites.front_default}">
            

            <div class="pokdek-foot">
                <img src="${typeIcon}" class="type-icon">
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