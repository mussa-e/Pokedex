let allPokemon = [];
let allPokemonData = [];
let currentOffset = 0;
let limit = 20;
let apiJson;
let pokemonApiJson;


let typeIcons = {
    bug: "./img/bug.svg",
    dark: "./img/dark.svg",
    dragon: "./img/dragon.svg",
    electric: "./img/electric.svg",
    fairy: "./img/fairy.svg",
    fighting: "./img/fighting.svg",
    fire: "./img/fire.svg",
    flying: "./img/flying.svg",
    ghost: "./img/ghost.svg",
    grass: "./img/grass.svg",
    ground: "./img/ground.svg",
    ice: "./img/ice.svg",
    normal: "./img/normal.svg",
    poison: "./img/poison.svg",
    psychic: "./img/psychic.svg",
    rock: "./img/rock.svg",
    steel: "./img/steel.svg",
    water: "./img/water.svg"
};


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('inputfield').addEventListener('input', search);
});


function init(){  
    fetchPoks();
}


async function fetchPoks(limit, currentOffset) {
    let baseUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${currentOffset}`;

    try {
        let api = await fetch(baseUrl);
        apiJson = await api.json();
        renderPoks(apiJson);
    } catch (error) {
        console.error("Fehler beim Abrufen der Pokémon:", error);
    }
}


async function renderPoks(apiJson) {
    let contentRef = document.getElementById("gallery");

    let oldButton = document.getElementById("btn");
    if (oldButton) {
        oldButton.remove();
    }

    for (let indexPok = 0; indexPok < apiJson.results.length; indexPok++) {
        let globalIndex = currentOffset + indexPok;
        let pokemonUrl = apiJson.results[indexPok].url;
        let PokemonApi = await fetch(pokemonUrl);
        let pokemonApiJson = await PokemonApi.json();

        let pokemonData = preparePokemonData(apiJson, indexPok, pokemonApiJson, globalIndex);
        contentRef.innerHTML += getPokTemplateFromData(pokemonData);
    }

    contentRef.innerHTML += getButtonWrapper();
}


function preparePokemonData(apiJson, indexPok, pokemonApiJson, globalIndex) {
    allPokemonData[globalIndex] = pokemonApiJson;
    allPokemon[globalIndex] = apiJson;

    const typeIconsHtml = pokemonApiJson.types.map(t => {
        const typeName = t.type.name;
        const typeIcon = typeIcons[typeName] || "";
        return `<img src="${typeIcon}" class="type-icon"> `;
    }).join("");

    return {
        id: globalIndex,
        name: apiJson.results[indexPok].name,
        image: pokemonApiJson.sprites.other["official-artwork"].front_default,
        bgClass: `bg_${pokemonApiJson.types[0].type.name}`,
        typeIconsHtml
    };
}


function showCard(indexPok) {
    toggleOverlay();
    const cardHTML = generateCardHTML(indexPok);
    document.getElementById("overlay").innerHTML = cardHTML;

    toggleBlur("main-div");
    toggleBlur("footer");
    toggleBlur("header");

    checkSkipRight(indexPok);
    checkSkipLeftTwo(indexPok);
}


function toggleOverlay() {
    document.getElementById("overlay").classList.toggle("d-none");
}


function toggleBlur(elementId) {
    document.getElementById(elementId).classList.toggle("blurred");
}


function generateCardHTML(indexPok) {
    const pokemon = allPokemonData[indexPok];
    const name = capitalize(pokemon.name);
    const image = pokemon.sprites.other["official-artwork"].front_default;
    const abilitiesHTML = getAbilitiesHTML(pokemon);
    const typeIconsHTML = getTypeIconsHTML(pokemon);

    return getCardTemplate(indexPok, name, image, pokemon, abilitiesHTML, typeIconsHTML);
}


function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}


function getAbilitiesHTML(pokemon) {
    return pokemon.abilities.map((a, i) => {
        const name = capitalize(a.ability.name);
        return i < pokemon.abilities.length - 1 ? `${name}, ` : name;
    }).join("");
}


function getTypeIconsHTML(pokemon) {
    return pokemon.types.map(t => {
        const typeName = t.type.name;
        const icon = typeIcons[typeName] || "";
        return `<img src="${icon}">`;
    }).join("");
}


function template(){
    let overlay = document.getElementById("overlay");
    overlay.classList.toggle("d-none");

    document.getElementById("main-div").classList.toggle("blurred");
    document.getElementById("footer").classList.toggle("blurred");
    document.getElementById("header").classList.toggle("blurred");
}


function loadMore() {
    currentOffset += 20;
    spinner();
    fetchPoks(20, currentOffset);
    console.log("limit", limit);
    console.log("currentOffset", currentOffset)
}


function underline(active) {
    let main = document.getElementById("main");
    let stats = document.getElementById("stats");
    let evochain = document.getElementById("evochain");

    main.classList.remove("border");
    stats.classList.remove("border");
    evochain.classList.remove("border");

    if (active === "main") {
        main.classList.add("border");
    } else if (active === "stats") {
        stats.classList.add("border");
    } else if (active === "evochain") {
        evochain.classList.add("border");
    }
}
            
        
















