import React from 'react'

type myProps = {
  text: string
  onClick?: VoidFunction
  isDanger?: boolean
}
export const LargeButton: React.FC<myProps> = ({ text, onClick, isDanger }) => {
  return (
    <div className=" px-10 py-4">
      <button
        className="w-full h-12 bg-green-400 rounded-3xl text-white text-2xl px-5 text-center flex items-center justify-center "
        onClick={onClick}
        style={{ backgroundColor: isDanger ? 'rgba(205,92,92)' : ' rgba(52, 211, 153)' }}
      >
        {text}
      </button>
    </div>
  )
}
