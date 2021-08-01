import React from 'react'
import { Type } from '../../../data/ApiInterfaces/intefaces'
import Subtitle from '../../atomic/subtitle'

type myProps = {
  types: Array<Type>
  text: string
}
export const TypesGrid: React.FC<myProps> = ({ types, text }) => {
  const typeComponents = types.map((type, i) => <div key={i}>{type.type.name}</div>)
  return (
    <div>
      <Subtitle subtitleText={text} />
      <div className="grid grid-cols-2">{typeComponents}</div>
    </div>
  )
}
