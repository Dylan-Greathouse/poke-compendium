import Pokemon from "../pokemon/Pokemon";


export function PokemonList ({ pokemons }) {
    return (
        <ul>
            {pokemons.map((pokemon) => {
                return (
                    <li key={pokemon.pokemon}>
                        <Pokemon pokemons={pokemon} />
                    </li>
                )
            })}
        </ul>
    )
}

export default PokemonList;