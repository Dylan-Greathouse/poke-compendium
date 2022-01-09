import { useState, useEffect } from 'react';
import { PokemonList } from '../components/pokemonList/PokemonList';
import { Controls } from '../components/Controls/Controls';
import { fetchPokemon, fetchSearchPokemon, fetchTypes } from '../services/pokemon';
import '../App.css';

export const Compendium = () => {
    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState('all');

  
  useEffect(() => {
    const getPokemon = async () => {
      const pokemonList = await fetchPokemon();
       setPokemons(pokemonList);
      setLoading(false);
    };

    getPokemon();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchSearchPokemon(searchName)
      .then((searchedPokemons) => {
        setPokemons(searchedPokemons)
     })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
        setSearchName('');
        setSelectedType('');
      });
  };

  useEffect(() => {
    async function getTypes() {
     const pokemonTypes = await fetchTypes();
     setTypes(pokemonTypes);
   }

   getTypes();
 }, []);


    return (
        <div>
            <h1>Pokedex</h1>
            <Controls
                name={searchName}
                handleSubmit={handleSubmit}
                handleNameChange={setSearchName}
                types={types}
                filterChange={setSelectedType}
                selectedType={selectedType}
            />
            {loading ? (<h1>Loading...</h1>): (
                <PokemonList pokemon={pokemons}/>

            )}
        </div>
    )
}

export default Compendium;