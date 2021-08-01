import { IonContent, IonSearchbar, IonPage } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardAndSearchBar from '../../components/template/cardAndSearchBar'

export const PokeInfo = () => {
  return (
    <IonPage>
      <CardAndSearchBar />
    </IonPage>
  )
}
