// const pokemonData = {
//   bulbasaur: null,
//   ivysaur: null,
//   venusaur: null,
//   charmander: null,
//   charmeleon: null,
//   charizard: null,
//   squirtle: null,
//   wartortle: null,
//   blastoise: null,
//   caterpie: null,
//   metapod: null,
//   butterfree: null,
//   weedle: null,
//   kakuna: null,
//   beedrill: null,
//   pidgey: null,
//   pidgeotto: null,
//   pidgeot: null,
//   rattata: null,
//   raticate: null,
//   spearow: null,
//   fearow: null,
//   ekans: null,
//   arbok: null,
//   pikachu: null,
//   raichu: null,
//   sandshrew: null,
//   sandslash: null,
//   "nidoran-f": null,
//   nidorina: null,
//   nidoqueen: null,
//   "nidoran-m": null,
//   nidorino: null,
//   nidoking: null,
//   clefairy: null,
//   clefable: null,
//   vulpix: null,
//   ninetales: null,
//   jigglypuff: null,
//   wigglytuff: null,
// };


let pokemons = [
  {
    name: "pichu",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png",
  },
  {
    name: "cleffa",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png",
  },
  {
    name: "igglybuff",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/174.png",
  }
];


async function getPokemons() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=40&offset=0');
  const data = await res.json();

  const fetchedPokemons = await Promise.all(
    data.results.map(async ({ name, url }) => {
      const details = await (await fetch(url)).json();
      return {
        name,
        image: details.sprites.other['official-artwork'].front_default
      };
    })
  );

  // Füge fetchedPokemons ans bestehende Array an
  pokemons = [...pokemons, ...fetchedPokemons];

//   console.log(pokemons);
}










