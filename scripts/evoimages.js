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
  },
  {
    name: "tyrogue",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/236.png",
  },
  {
    name: "smoochum",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/238.png",
  },
  {
    name: "elekid",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/239.png",
  },
  {
    name: "magby",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/240.png",
  },
  {
    name: "miltank",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/241.png",
  },
  {
    name: "blissey",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/242.png",
  },
  {
    name: "budew",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/406.png",
  },
  {
    name: "mime-jr",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/439.png",
  },
  {
    name: "happiny",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/440.png",
  },
  {
    name: "munchlax",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/446.png",
  },
  {
    name: "mantyke",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/458.png",
  },
  {
    name: "riolu",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/447.png",
  },
  {
    name: "toxel",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/848.png",
  }
];
// Info: 
// Der Grund warum ich pichu, cleffa und igglybuff manuel in das array reingeschireben habe ist, 
// weil deren sprites nicht aus der 
// api gerendert werden konnten, weil sie dort nicht enthalten sind. 
// Die anderen Pokemons rendere ich dynamisch mit der Funktion unten.


async function getPokemons() {
  try {
    if (!apiJson || !apiJson.results) {
      console.error("Fehler: apiJson ist nicht geladen.");
      return;
    }

    let fetchedPokemons = await Promise.all(
      apiJson.results.map(async ({ name, url }) => {
        let details = await (await fetch(url)).json();
        return {
          name,
          image: details.sprites.other['official-artwork'].front_default
        };
      })
    );

    pokemons = [...pokemons, ...fetchedPokemons];
  } catch (error) {
    console.error("Fehler beim Abrufen der Pokémon-Daten:", error);
  }
}











