import React from 'react'

type myProps = {
  title: string
  stat: string
}
export const TitleAndStat: React.FC<myProps> = ({ title, stat }) => {
  return (
    <div>
      <b className="text-white text-xl capitalize">{title}</b>
      <h1 className="text-green-400 text-xl">{stat}</h1>
    </div>
  )
}
