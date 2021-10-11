
import React from 'react'
import useFetchPokemon from '../useRequest'
 
export default function Pokemon({ pokemon }) {
  const { name } = pokemon
  const { result, error } = useFetchPokemon(name)
 
  if (error) return <h1>Something went wrong!</h1>
  if (!result) return <h1>Loading...</h1>
 
  return (
    <div className='z-0 m-6 bg-blue-300 text-yellow-300 p-2 rounded-xl
    border border-yellow-300 text-center shadow-2xl relative -hidoverflowden
    cursor-pointer transition-all '>
      <span className='bg-yellow-300 w-12 p-1 font-700 text-white
      absolute rounded-tl-xl top-0 left-0
  '>#{result.id}</span>
      <img
        className='w-36 block m-auto'
        src={result.sprites.front_default}
        alt={name}
      />
      <h1 className=' capitalize text-white text-2xl font-bold'>{name}</h1>
      <span className=' text-sm textyellow-300'>
        {result.types.map((poke) => poke.type.name).join(', ')}
      </span>
    </div>
  )
}