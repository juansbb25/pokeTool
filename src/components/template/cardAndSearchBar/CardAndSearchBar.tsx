import React, { useState, useEffect } from 'react'
import PokeCard from '../../organism/pokeCard'
import axios from 'axios'
import { Poke } from '../../../data/ApiInterfaces/intefaces'
import { SearchBar } from '../../molecule/searchBar/SearchBar'
import Title from '../../atomic/title'
import { TypesRelations, DamageRelations } from '../../../data/ApiInterfaces/typesInterfaces'

export const CardAndSearchBar = () => {
  const [baseURL, setBaseURL] = useState(`https://pokeapi.co/api/v2/pokemon/gengar`)
  const [pokeData, setpokeData] = useState<Poke>()
  const [damageRelations, setDamageRelations] = useState<any>()

  const setPokemonNameFunction = (name: string) => {
    setBaseURL(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }

  useEffect(() => {
    const getPokeData = async () => {
      try {
        const { data } = await axios.get<Poke>(baseURL)
        setpokeData(data)
      } catch (err) {
        console.log(err)
      }
    }
    getPokeData()
  }, [baseURL])

  useEffect(() => {
    const temp = async () => {
      if (pokeData?.types) {
        const promiseReponses = pokeData?.types.map((type) =>
          axios.get<TypesRelations>(type.type.url)
        )
        const responseList = await Promise.all(promiseReponses)
        const DamageRelations = responseList.map((typeRes) => typeRes.data.damage_relations)

        setDamageRelations(DamageRelations)
      }
    }
    pokeData?.types && temp()
  }, [pokeData])

  if (!pokeData) return null

  return (
    <>
      <SearchBar setPokemonNameProp={setPokemonNameFunction} />
      <Title titleName={pokeData.forms[0].name} />
      <PokeCard
        img={pokeData.sprites.other?.['official-artwork'].front_default!}
        stats={pokeData.stats}
        types={pokeData.types}
        damageRelations={damageRelations}
      />
    </>
  )
}
