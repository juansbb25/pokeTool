import React from 'react'
import AsyncImage from '../asyncImage'

type myProps = {
  img: string
}
export const CircularImage: React.FC<myProps> = ({ img }) => {
  return (
    <div className="w-full h-full rounded-full bg-gradient-to-tl from-gray-300 to-white">
      <AsyncImage src={img} />
    </div>
  )
}
