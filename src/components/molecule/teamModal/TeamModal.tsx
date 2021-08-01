import React from 'react'
import { PokemonTeam } from '../../../data/globalInterfaces/pokemonTeamInterface'

type myProps = {
  pokeTeam: PokemonTeam
}
export const TeamModal: React.FC<myProps> = ({ pokeTeam }) => {
  return (
    <div className="bg-black bg-opacity-80 w-full h-full p-6 absolute top-0 left-0">
      <div className="w-full h-full bg-gray-800 rounded-3xl"></div>
    </div>
  )
}
