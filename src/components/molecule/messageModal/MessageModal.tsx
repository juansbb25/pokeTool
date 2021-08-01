import { type } from 'os'
import React from 'react'
import BoxText from '../../atomic/boxText'
import LargeButton from '../../atomic/largeButton'

type myProps = {
  text: string
  onClick?: () => void
}
export const MessageModal: React.FC<myProps> = ({ text, onClick }) => {
  return (
    <div className="w-full h-full bg-black bg-opacity-60 absolute top-0 left-0 flex  items-center justify-center">
      <div
        className="w-2/3 h-40 bg-gradient-to-tl from-gray-900 to-gray-800
        rounded-3xl text-white text-shadow-card flex flex-col items-center justify-center text-xl text-center"
      >
        {text}
        <div className="w-full">
          <LargeButton text="close" onClick={onClick} />
        </div>
      </div>
    </div>
  )
}
