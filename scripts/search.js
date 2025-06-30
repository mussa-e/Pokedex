// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('inputfield').addEventListener('input', search);
// });


function search() {
    let searchValue = document.getElementById('inputfield').value.toLowerCase();
    let container = document.getElementById('gallery');

    container.innerHTML = '';
    let matchesFound = false;

    for (let i = 0; i < allPokemon.length; i++) {
        let name = allPokemon[i].results[i].name.toLowerCase();

        if (name.includes(searchValue)) {
            let pokemonData = preparePokemonData(allPokemon[i], i, allPokemonData[i]);
            container.innerHTML += getPokTemplateFromData(pokemonData);
            matchesFound = true;
        }
    }

    if (!matchesFound) {
        container.innerHTML = `<div class="search-user-feedback">No matches found</div>`;
    }

    if (searchValue === '') {
        container.innerHTML += getButtonWrapper();
    }
}


