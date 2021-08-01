import { ellipse } from 'ionicons/icons'
import React, { useState, useEffect } from 'react'
import { DamageRelations } from '../../../data/ApiInterfaces/typesInterfaces'
import Subtitle from '../../atomic/subtitle'

type myProps = {
  damageRelations: Array<DamageRelations>
  text: string
}
export const WeaknessGrid: React.FC<myProps> = ({ damageRelations, text }) => {
  const weakness: Array<{ name: string; multiplier: number }> = []

  damageRelations?.forEach((element) => {
    element.double_damage_from.forEach((elementDoubleDamage) => {
      const index = weakness.findIndex((res) => res.name === elementDoubleDamage.name)
      if (index !== -1) {
        weakness[index].multiplier = weakness[index].multiplier * 2
      } else {
        weakness.push({ name: elementDoubleDamage.name, multiplier: 2 })
      }
    })
    element.half_damage_from.forEach((elementHalfDamage) => {
      const index = weakness.findIndex((res) => res.name === elementHalfDamage.name)
      if (index !== -1) {
        weakness[index].multiplier = weakness[index].multiplier * 0.5
      } else {
        weakness.push({ name: elementHalfDamage.name, multiplier: 0.5 })
      }
    })
    element.no_damage_from.forEach((elementNoDamage) => {
      const index = weakness.findIndex((res) => res.name === elementNoDamage.name)
      if (index !== -1) {
        weakness[index].multiplier = weakness[index].multiplier * 0
      } else {
        weakness.push({ name: elementNoDamage.name, multiplier: 0 })
      }
    })
  })

  const weaknessComponents = weakness
    .filter((res) => res.multiplier >= 2)
    .map((data, i) => <div key={i}>{`${data.multiplier}x  ${data.name}`}</div>)
  const strengthComponents = weakness
    .filter((res) => res.multiplier < 1 && res.multiplier > 0)
    .map((data, i) => <div key={i}>{`${data.multiplier}x  ${data.name}`}</div>)
  const immunityComponents = weakness
    .filter((res) => res.multiplier == 0)
    .map((data, i) => <div key={i}>{`${data.multiplier}x  ${data.name}`}</div>)
  return (
    <div className="w-full h-full flex flex-col py-14">
      <div className="m-auto">
        <Subtitle subtitleText={'Weekness'} />
        <div className="grid grid-cols-2 gap-4 p-2">{weaknessComponents}</div>
      </div>
      <div className="m-auto">
        <Subtitle subtitleText={'Strength'} />
        <div className="grid grid-cols-2 gap-4 p-2">{strengthComponents}</div>
      </div>
      <div className="m-auto">
        <Subtitle subtitleText={'Immunity'} />
        <div className="grid grid-cols-2 gap-4 p-2">{immunityComponents}</div>
      </div>
    </div>
  )
}
