import React, { CSSProperties } from 'react'

type myProps = {
  subtitleText: string
  style?: CSSProperties
}
export const Subtitle: React.FC<myProps> = ({ subtitleText, style }) => {
  return (
    <div>
      <b className={`text-2xl text-green-400 font-Marker`} style={style}>
        {subtitleText}
      </b>
    </div>
  )
}
