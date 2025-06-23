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
// Info: 
// Der Grund warum ich pichu, cleffa und igglybuff manuel in das array reingeschireben habe ist, 
// weil deren sprites nicht aus der 
// api gerendert werden konnten, weil sie dort nicht enthalten sind. 
// Die anderen Pokemons rendere ich dynamisch mit der Funktion unten.


async function getPokemons() {
  let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=40&offset=0');
  let data = await res.json();

  let fetchedPokemons = await Promise.all(
    data.results.map(async ({ name, url }) => {
      let details = await (await fetch(url)).json();
      return {
        name,
        image: details.sprites.other['official-artwork'].front_default
      };
    })
  );

  pokemons = [...pokemons, ...fetchedPokemons];
}










