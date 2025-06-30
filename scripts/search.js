function search() {
    let searchValue = document.getElementById('inputfield').value.toLowerCase();
    let container = document.getElementById('gallery');

    container.innerHTML = '';
    let matchesFound = false;

    for (let i = 0; i < allPokemonData.length; i++) {
        let pokemon = allPokemonData[i];
        if (!pokemon) continue;

        let name = pokemon.name.toLowerCase();

        if (name.includes(searchValue)) {
            let pokemonData = preparePokemonData({ results: [{ name }] }, 0, pokemon, i);
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


