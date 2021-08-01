import React from 'react'
import LargeButton from '../../atomic/largeButton'

type myProps = {
  saveOnClick?: () => void
  cancelOnClick?: () => void
}
export const BoxInput: React.FC<myProps> = ({ saveOnClick, cancelOnClick }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 flex-col ">
      <input className="rounded-3xl h-14 w-2/3 bg-white p-4 outline-none "></input>
      <div className="flex flex-row">
        <div className="w-1/2">
          <LargeButton text={'Save'} onClick={saveOnClick} />
        </div>
        <div className="w-1/2">
          <LargeButton text={'Cancel'} onClick={cancelOnClick} isDanger />
        </div>
      </div>
    </div>
  )
}
