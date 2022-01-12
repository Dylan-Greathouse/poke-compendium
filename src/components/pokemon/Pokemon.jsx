import React from 'react'

export function Pokemon({pokemons}) {
   const {
      pokemon,
      height,
      hp,
      attack

   } = pokemons
   return (
      <div>
            <section className='pokemon'>
            <h3>{pokemon}</h3>
            <p>height: {height}</p>
        <li>
               
                <section className='pokemon-stats'>
                 <p>HP: {hp}</p>
                 <p>ATK: {attack}</p>
                </section>
           
        </li>
    </section>
      </div>
   )
   
}


export default Pokemon;