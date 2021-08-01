import React, { useEffect, useState } from 'react'
import FloatingList from '../../atomic/floatingList'
import axios from 'axios'
import { Pokemon } from '../../../data/ApiInterfaces/pokemonsInterfaces'

type myProps = {
  setPokemonNameProp: (name: string) => void
}
export const SearchBar: React.FC<myProps> = ({ setPokemonNameProp }) => {
  const [searchText, setSearchText] = useState('')
  const [pokemonsNamesList, setpokemonsNamesList] = useState<Array<string>>([])
  let baseURL = `https://pokeapi.co/api/v2/pokemon/?limit=2000`

  const setPokemonNameFunction = (name: string) => {
    setPokemonNameProp(name)
  }
  const deleteSearchData = () => {
    setSearchText('')
  }
  useEffect(() => {
    const getPokemonsNameList = async () => {
      try {
        const tempPokemonsNamesList: Array<string> = []
        const { data } = await axios.get<Pokemon>(baseURL)
        data.results.map((pokemon) => {
          tempPokemonsNamesList.push(pokemon.name)
        })
        setpokemonsNamesList(tempPokemonsNamesList)
      } catch (err) {}
    }
    getPokemonsNameList()
  }, [])

  return (
    <div className="h-12">
      <div className="h-full w-full flex flex-row p-1">
        <input
          type="text "
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
          className=" h-full w-full bg-white rounded-3xl border-2 border-black outline-none pl-4 focus:border-red-800  "
        ></input>
        <img src={process.env.PUBLIC_URL + '/assets/pokeball.svg'} alt="Logo" />
      </div>
      {searchText.length > 0 && (
        <FloatingList
          setSearchTextProp={deleteSearchData}
          items={pokemonsNamesList.filter((data) => data.startsWith(searchText))}
          setPokemonNameProp={setPokemonNameFunction}
        />
      )}
    </div>
  )
}
