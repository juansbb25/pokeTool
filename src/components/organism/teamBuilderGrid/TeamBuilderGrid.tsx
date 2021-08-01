import React, { useEffect, useState } from 'react'
import { Poke } from '../../../data/ApiInterfaces/intefaces'
import { PokemonTeam } from '../../../data/globalInterfaces/pokemonTeamInterface'
import AddItem from '../../molecule/addItem'
import MessageModal from '../../molecule/messageModal'

type myProps = {
  setPokemonTeam: any
}
export const TeamBuilderGrid: React.FC<myProps> = ({ setPokemonTeam }) => {
  const [isErrorModal, setisErrorModal] = useState(false)
  const [pokemonTeam, setpokemonTeam] = useState<PokemonTeam>({
    PokemonMembers: [],
    teamDoubleDamageFrom: []
  })
  useEffect(() => {
    localStorage.setItem('test', JSON.stringify(pokemonTeam))
    setPokemonTeam(pokemonTeam)
  }, [pokemonTeam])

  const setPokemonMember = (member: Poke) => {
    setpokemonTeam({
      PokemonMembers: [...pokemonTeam.PokemonMembers, member],
      teamDoubleDamageFrom: [...pokemonTeam.teamDoubleDamageFrom]
    })
  }
  const removePokemonMember = (name: string) => {
    const temp = pokemonTeam.PokemonMembers.filter((member) => !member.name.includes(name))
    setpokemonTeam({
      PokemonMembers: [...temp],
      teamDoubleDamageFrom: [...pokemonTeam.teamDoubleDamageFrom]
    })
  }
  const setErrorModal = (bool: boolean) => {
    setisErrorModal(bool)
  }
  const pokemonTeamNumber = 6
  const pokemonTeamList = [
    ...pokemonTeam.PokemonMembers,
    ...Array(pokemonTeamNumber - pokemonTeam.PokemonMembers.length).fill(0)
  ]

  const PokemonGrid = pokemonTeamList.map((member, i) => (
    <div key={i}>
      <AddItem
        setPokemonMember={setPokemonMember}
        removePokemonMember={removePokemonMember}
        pokemonTeam={pokemonTeam}
        setErrorModal={setErrorModal}
      />
    </div>
  ))
  return (
    <div className="w-full h-full grid grid-cols-2 p-2">
      {PokemonGrid}
      {isErrorModal && (
        <MessageModal
          text="The Pokemon is already included"
          onClick={() => {
            setisErrorModal(false)
          }}
        />
      )}
    </div>
  )
}
