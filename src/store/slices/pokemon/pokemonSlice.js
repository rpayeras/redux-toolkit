import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 0,
  pokemons: [],
  isLoading: false
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true

      // With redux toolkit we will not need spread the current state
      // return {
      //   ...state,
      //   isLoading: true
      // }
    },
    finishLoading: (state) => {
      state.isLoading = false
    },
    setPokemons: (state, action) => {
      state.page = action.payload.page
      state.pokemons = action.payload.pokemons
    }
  }
})

export const { startLoading, finishLoading, setPokemons } = pokemonSlice.actions
