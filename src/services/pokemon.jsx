const favPokemon = [
    'charizard',
    'jolteon',
    'blaziken',
    'lucario',
    'suicune',
    'ditto',
    'golduck',
    'gardevoir',
    'ninetales',
    'houndoom',
  ];
  
export const fetchPokemon = async () => {
    const pokemonList = await Promise.all(
        favPokemon.map(async (fav) => {
          const fetchedPokemon = await fetch(
            `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${fav}`
          );
    
          const pokemonData = await fetchedPokemon.json();
          if (pokemonData.count > 1) {
            const exactPokemon = pokemonData.results.find(
              (results) => results.pokemon === fav
            );
            return exactPokemon;
          }
          return pokemonData.results[0]
        })
      );
      return pokemonList;
};

    export const fetchSearchPokemon = async (pokemonName) => {
        const res = await fetch( `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${pokemonName}`);
        const pokemonSearch = await res.json();
        console.log('SEARCH', pokemonSearch)
        return pokemonSearch.results;
    };


    
    export const fetchTypes = async () => {
        const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex/types`);
      
      
        const pokemonTypes = await res.json();

        return pokemonTypes.map((item) => item.type);

    };