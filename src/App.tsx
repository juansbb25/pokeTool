import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonContent, IonTabsContext, IonPage } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Theme variables */
import './theme/variables.css'

import TabsBar from './components/organism/tabsBar'

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <TabsBar />
    </IonReactRouter>
  </IonApp>
)

export default App
