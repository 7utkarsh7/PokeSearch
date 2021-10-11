// index.js
import { useState } from 'react'
import useFetchPokemon from '../useRequest'
import Pokemon from '../components/Pokemon'
import PokeSearch from '../components/PokeSearch.js'

export default function IndexPage() {
  const { result, error } = useFetchPokemon()
  const [recent, setRecent]=useState(null);

  if (error) return <h1>Something went wrong!</h1>
  if (!result) return <h1>Loading...</h1>
  
  const handleCallback = (recentPoke)=>{
     setRecent(recentPoke.name);
  }
  return (
    <div className=' bg-blue-600'>
       <p className="font-bold text-7xl py-4 text-white
        text-center">Poke<strong className="text-red-600">S</strong>earch</p>
      {recent && <p className=" py-4 text-green-300
        text-center"><strong className="recentpoke">Recent Search : {recent}</strong></p>}
      <div className="grid grid-cols-3 -z-1">
         <div></div>
         <PokeSearch parentCallback={handleCallback} pokelist={result}/>
         <div></div>
        {result.results.map((pokemon) => (
          <Pokemon className="main" pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>
    </div>
  )
}