import React, { useEffect, useState } from 'react'
import { Stat, Type } from '../../../data/ApiInterfaces/intefaces'
import StatsGrid from '../../molecule/statsGrid'
import TypesGrid from '../../molecule/typesGrid'
import { DamageRelations } from '../../../data/ApiInterfaces/typesInterfaces'
import WeaknessGrid from '../../molecule/weaknessGrid'
import RoundButton from '../../atomic/roundButton'
import CircularImage from '../../atomic/circularImage'
type cardProps = {
  img: string
  stats: Array<Stat>
  types: Array<Type>
  damageRelations: Array<DamageRelations>
}

export const PokeCard: React.FC<cardProps> = ({ stats, img, types, damageRelations }) => {
  const [isFront, setisFront] = useState(true)
  const [rotationY, setrotationY] = useState('')
  useEffect(() => {
    isFront ? setrotationY('rotateY(0deg)') : setrotationY('rotateY(180deg)')
  }, [isFront])
  return (
    <div
      className="h-full w-full preserve-3d smooth-transition relative"
      style={{ transform: rotationY }}
    >
      {/* front of card */}
      <div className="h-full w-full absolute p-5">
        <div
          className=" w-full h-full self-center rounded-2xl shadow-card 
       text-white bg-gradient-to-tl from-gray-900 to-gray-800
       text-center flex flex-col relative overflow-y-auto
       "
        >
          <div className="h-40 w-40 mx-auto my-8">
            <CircularImage img={img} />
          </div>
          <StatsGrid stats={stats} />
          <div className="p-6">
            <TypesGrid types={types} text="Nature" />
          </div>
        </div>
        <div className="absolute bottom-4 right-4 ">
          <RoundButton
            icon={'add'}
            onClick={() => {
              setisFront(!isFront)
            }}
          />
        </div>
      </div>

      {/* back of card */}
      <div className="h-full w-full hidden-back absolute rotate-Y-180 p-5  ">
        <div
          className="w-full h-full rounded-2xl shadow-card 
       text-white bg-gradient-to-tl from-gray-900 to-gray-800
       text-center flex flex-col relative
       "
        >
          <WeaknessGrid damageRelations={damageRelations} text="Weakness" />
        </div>
        <div className="absolute bottom-4 right-4 outline-none ">
          <RoundButton
            icon={'arrow_back'}
            onClick={() => {
              setisFront(!isFront)
            }}
          />
        </div>
      </div>
    </div>
  )
}
