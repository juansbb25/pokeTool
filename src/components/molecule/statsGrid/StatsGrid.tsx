import React from 'react'
import { Stat } from '../../../data/ApiInterfaces/intefaces'
import TitleAndStat from '../../atomic/titleAndStat'

type myProps = {
  stats: Array<Stat>
}
export const StatsGrid: React.FC<myProps> = ({ stats }) => {
  const statItems = stats.map((stat, i) => (
    <div className=" inline-grid place-self-center" key={i}>
      <TitleAndStat title={stat.stat.name} stat={String(stat.base_stat)} />
    </div>
  ))
  return <div className="grid grid-cols-2 gap-4 ">{statItems}</div>
}
