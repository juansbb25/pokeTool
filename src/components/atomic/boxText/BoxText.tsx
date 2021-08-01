import React from 'react'

type myProps = {
  text: string
}
export const BoxText: React.FC<myProps> = ({ text }) => {
  return (
    <div className="w-2/3 h-40 bg-gray-800 z-20 rounded text-white text-2xl text-center">
      {text}
    </div>
  )
}
