import React, { useEffect, useState } from 'react'
import LargeButton from '../../atomic/largeButton'
import RoundButton from '../../atomic/roundButton'
import Title from '../../atomic/title'
import AddItem from '../../molecule/addItem'
import TeamBuilderGrid from '../../organism/teamBuilderGrid'
import BoxInput from '../../molecule/boxInput'
import { PokemonTeam, PokemonTeams } from '../../../data/globalInterfaces/pokemonTeamInterface'
import { sep } from 'path'
import MessageModal from '../../molecule/messageModal/index'

type myProps = {
  pokeTeam: PokemonTeam
}
export const TeamBuilderGridTitleAndButton = () => {
  const [modalText, setModalText] = useState(false)
  const [modalError, setmodalError] = useState(false)
  const [PokeTeam, setPokeTeam] = useState<PokemonTeam>()

  console.log(PokeTeam)
  useEffect(() => {
    console.log('montando grid')
    return () => {
      console.log('desmontando grid')
    }
  }, [])
  const addPokeTeam = () => {
    const tempPokeTeams: Array<PokemonTeam> = JSON.parse(
      localStorage.getItem('PokemonTeams') || '[]'
    )
    if (PokeTeam)
      localStorage.setItem('PokemonTeams', JSON.stringify(tempPokeTeams.concat([PokeTeam])))
  }
  console.log(PokeTeam?.PokemonMembers.length)
  return (
    <div className="w-full h-full flex flex-col font-Marker">
      <Title titleName="Build Your Team" />
      <TeamBuilderGrid setPokemonTeam={setPokeTeam} />
      <LargeButton
        text="Submit Team"
        onClick={() => {
          if (PokeTeam?.PokemonMembers.length === 6) setModalText(true)
          else {
            setmodalError(true)
          }
        }}
      />
      {modalText && (
        <BoxInput
          cancelOnClick={() => setModalText(false)}
          saveOnClick={() => {
            setModalText(false)
            addPokeTeam()
          }}
        />
      )}
      {modalError && <MessageModal text="Missing Pokemons" onClick={() => setmodalError(false)} />}
    </div>
  )
}
