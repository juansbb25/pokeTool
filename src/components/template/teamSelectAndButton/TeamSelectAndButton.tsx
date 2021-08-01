import React, { useEffect, useState } from 'react'
import { SelectTeamButton } from '../../molecule/selectTeamButton/SelectTeamButton'
import { PokemonTeam, PokemonTeams } from '../../../data/globalInterfaces/pokemonTeamInterface'

export const TeamSelectAndButton = () => {
  const [pokeTeams, setpokeTeams] = useState<Array<PokemonTeam>>([])
  useEffect(() => {
    setpokeTeams(JSON.parse(localStorage.getItem('PokemonTeams') || ''))
    return () => {
      console.log('desmontando')
    }
  }, [])
  const tempPokeTeamComponents = pokeTeams?.map((team, i) => (
    <SelectTeamButton pokeTeam={team} key={i} />
  ))
  return <div className="flex flex-col">{tempPokeTeamComponents}</div>
}
