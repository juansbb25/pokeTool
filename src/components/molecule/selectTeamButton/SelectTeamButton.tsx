import React, { useState } from 'react'
import TeamSelect from '../../../pages/teamSelect'
import CircularImage from '../../atomic/circularImage'
import { TeamModal } from '../teamModal/TeamModal'
import { PokemonTeam } from '../../../data/globalInterfaces/pokemonTeamInterface'

type myProps = {
  pokeTeam: PokemonTeam
}
export const SelectTeamButton: React.FC<myProps> = ({ pokeTeam }) => {
  const [isTeamModal, setIsTeamModal] = useState(false)
  const components = pokeTeam.PokemonMembers.map((member, i) => (
    <div key={i} className="h-14 w-14 flex-initial p-1">
      <CircularImage img={member.sprites.other?.['official-artwork'].front_default!} />
    </div>
  ))

  return (
    <div className="p-4 ">
      <div className="w-full h-24 bg-gray-800 flex flex-row rounded-3xl items-center relative overflow-x-auto justify-evenly">
        {components}
        <span className="material-icons text-white m-auto absolute left-1/2 bottom-0">
          arrow_forward_ios
        </span>
      </div>
      {isTeamModal && <TeamModal pokeTeam={pokeTeam} />}
    </div>
  )
}
