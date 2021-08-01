import {
  IonTab,
  IonTabButton,
  IonTabs,
  IonIcon,
  IonLabel,
  IonBadge,
  IonRouterOutlet,
  IonTabBar
} from '@ionic/react'
import { calendar } from 'ionicons/icons'
import React from 'react'
import { Redirect, Switch } from 'react-router'
import { Route } from 'react-router-dom'
import Home from '../../../pages/home/Home'
import { PokeInfo } from '../../../pages/pokeInfo/PokeInfo'
import TeamBuild from '../../../pages/teamBuild'
import TeamSelect from '../../../pages/teamSelect'
import { Subtitle } from '../../atomic/subtitle/Subtitle'

export const TabsBar = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Switch>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/pokeinfo" component={PokeInfo} exact={true} />
          <Route path="/teambuilder" component={TeamBuild} exact={true} />
          <Route path="/select" component={TeamSelect} exact={true} />
        </Switch>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <img
            src={process.env.PUBLIC_URL + '/assets/_Bag.svg'}
            className=" object-scale-down h-4/6"
          />
          <div className=" h-2/6 flex ">
            <Subtitle subtitleText="Store" style={{ fontSize: '12px', lineHeight: '12px' }} />
          </div>
        </IonTabButton>
        <IonTabButton tab="pokeinfo" href="/pokeinfo">
          <img
            src={process.env.PUBLIC_URL + '/assets/_zubat.svg'}
            className=" object-scale-down h-4/6"
          />
          <div className=" h-2/6 flex ">
            <Subtitle subtitleText="PokeDex" style={{ fontSize: '12px', lineHeight: '12px' }} />
          </div>
        </IonTabButton>
        <IonTabButton tab="teams" href="/teambuilder">
          <img
            src={process.env.PUBLIC_URL + '/assets/_Master.svg'}
            className=" object-scale-down h-4/6"
          />
          <div className=" h-2/6 flex ">
            <Subtitle subtitleText="Build" style={{ fontSize: '12px', lineHeight: '12px' }} />
          </div>
        </IonTabButton>
        <IonTabButton tab="select" href="/select">
          <img
            src={process.env.PUBLIC_URL + '/assets/_Pokeballs.svg'}
            className=" object-scale-down h-4/6"
          />
          <div className=" h-2/6 flex ">
            <Subtitle subtitleText="Teams" style={{ fontSize: '12px', lineHeight: '12px' }} />
          </div>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}
