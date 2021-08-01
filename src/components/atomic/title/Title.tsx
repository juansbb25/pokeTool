import React from 'react'
type myProps = {
  titleName: string
}
export const Title: React.FC<myProps> = ({ titleName }) => {
  return (
    <div className="text-center uppercase">
      <b className=" text-neon-pink text-4xl font-Marker">{titleName}</b>
    </div>
  )
}
