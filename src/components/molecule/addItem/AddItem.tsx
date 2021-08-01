import RoundButton from '../../atomic/roundButton'
import LargeButton from '../../atomic/largeButton'
import SearchBar from '../searchBar'
import Subtitle from '../../atomic/subtitle'
import React, { useEffect, useRef, useState } from 'react'
import CircularImage from '../../atomic/circularImage'
import axios from 'axios'
import { Poke } from '../../../data/ApiInterfaces/intefaces'
import { PokemonTeam } from '../../../data/globalInterfaces/pokemonTeamInterface'

type myProps = {
  setPokemonMember: (data: Poke) => void
  removePokemonMember: (name: string) => void
  setErrorModal: (bool: boolean) => void
  pokemonTeam: PokemonTeam
}
export const AddItem: React.FC<myProps> = ({
  setPokemonMember,
  removePokemonMember,
  pokemonTeam,
  setErrorModal
}) => {
  const [pokemonName, setPokemonName] = useState<string>('')
  const [isModalActive, setisModalActive] = useState(false)
  const [isFront, setisFront] = useState(true)
  const [pokeData, setpokeData] = useState<Poke>()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    if (pokemonName != '') {
      const getPokeData = async () => {
        try {
          const { data } = await axios.get<Poke>(URL)
          setpokeData(data)
          setPokemonMember(data)
        } catch (err) {
          console.log(err)
        }
      }
      if (
        pokemonTeam.PokemonMembers.find((member) => member.name == pokemonName)?.name != pokemonName
      ) {
        getPokeData()
        setisFront(false)
        setisModalActive(false)
      } else {
        setErrorModal(true)
        setisModalActive(false)
        setPokemonName('')
      }
    }
  }, [pokemonName])

  const setPokemonNameFuction = (name: string) => {
    setPokemonName(name)
  }
  return (
    <>
      <div
        className="h-full w-full preserve-3d smooth-transition relative"
        style={{
          transform: isFront ? 'rotateY(0deg)' : 'rotateY(180deg)'
        }}
      >
        {/* Front of Card */}
        {isFront && (
          <div className="w-full h-full p-2 absolute">
            <div className="rounded-3xl h-full w-full bg-gradient-to-tl from-gray-900 to-gray-800 relative flex text-center justify-center">
              <div className="m-auto">
                <RoundButton
                  icon={'add'}
                  onClick={() => {
                    setisModalActive(true)
                  }}
                />
              </div>
            </div>
          </div>
        )}
        {/* Back of Card */}
        {!isFront && (
          <div className="w-full h-full p-1 absolute rotate-Y-180 hidden-back">
            <div className="rounded-3xl h-full w-full bg-gradient-to-tl from-gray-900 to-gray-800 relative flex flex-col text-center justify-center">
              <div className="absolute -bottom-2 -right-2">
                <RoundButton
                  icon={'arrow_back'}
                  onClick={() => {
                    setisFront(true)
                    removePokemonMember(pokemonName!)
                  }}
                />
              </div>
              {pokemonName && <Subtitle subtitleText={pokemonName} />}
              <div className=" h-28 w-28 m-auto">
                {pokeData?.sprites.other?.['official-artwork']?.front_default && (
                  <CircularImage
                    img={pokeData?.sprites.other?.['official-artwork']?.front_default}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      {isModalActive && (
        <div className="absolute top-0 right-0 w-full h-full z-10 bg-gray-900 opacity-95">
          <SearchBar setPokemonNameProp={setPokemonNameFuction} />
          <div className="z-30 absolute bottom-10 w-full">
            <LargeButton
              text="Close Modal"
              onClick={() => {
                setisModalActive(false)
              }}
            ></LargeButton>
          </div>
        </div>
      )}
    </>
  )
}
