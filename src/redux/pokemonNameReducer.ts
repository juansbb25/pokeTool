import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 'gengar',
  reducers: {
    setPokemonName: (state: string, action: PayloadAction<string>) => (state = action.payload)
  }
})

// Action creators are generated for each case reducer function
export const { setPokemonName } = counterSlice.actions
export default counterSlice.reducer
