import { configureStore } from '@reduxjs/toolkit'
import pokemonNameReducer from './pokemonNameReducer'

export const store = configureStore({
  reducer: {
    pokemonsNames: pokemonNameReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
