import Pokemon from "../pokemon/Pokemon";


export function PokemonList ({ pokemon }) {
    return (
        <ul>
            {pokemon.map((item) => {
                return (
                    <li key={item.pokemon}>
                        <Pokemon pokemons={item} />
                    </li>
                )
            })}
        </ul>
    )
}

export default PokemonList;