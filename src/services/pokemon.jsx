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
              (result) => result.pokemon === fav
            );
            return exactPokemon;
          }
        })
      );
      return pokemonList;
    };

    export const fetchSearchPokemon = (pokemonName) => {
        return fetch( `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${pokemonName}`)
        .then((data) => data.json())
    };


    
    export const fetchTypes = async () => {
        const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex/types`);
      
        const pokemonTypes = await res.json();
        return pokemonTypes;

    };