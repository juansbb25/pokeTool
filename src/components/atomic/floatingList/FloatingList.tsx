import React from 'react'

type myProps = {
  items: Array<string>
  setPokemonNameProp: (name: string) => void
  setSearchTextProp: VoidFunction
}
export const FloatingList: React.FC<myProps> = ({
  items,
  setPokemonNameProp,
  setSearchTextProp
}) => {
  const itemComponents = items.map((item, i) => (
    <div
      key={i}
      className="hover:bg-red-500 rounded-3xl text-white text-2xl"
      onClick={() => {
        setPokemonNameProp(item)
        setSearchTextProp()
      }}
    >
      {item}
    </div>
  ))
  return (
    <div className="w-full h-full p-2 absolute z-20  ">
      <div className="flex flex-col max-h-96  overflow-scroll text-center bg-gray-800 opacity-90 w-full rounded-3xl ">
        {itemComponents}
      </div>
    </div>
  )
}
