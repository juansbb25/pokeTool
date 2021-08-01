import React from 'react'
import { IonIcon } from '@ionic/react'
import 'material-icons/iconfont/material-icons.css'
type ButtonTypes = {
  onClick: VoidFunction
  icon: string
}
export const RoundButton: React.FC<ButtonTypes> = ({ onClick, icon }) => {
  return (
    <button
      className="bg-green-400 rounded-full  w-12 h-12 shadow-2xl hidden-back flex text-center justify-center "
      onClick={onClick}
    >
      <span className="material-icons text-white m-auto">{icon}</span>
    </button>
  )
}
