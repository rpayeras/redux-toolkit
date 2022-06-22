import { pokemonApi } from '../../../api/pokemonApi'
import { finishLoading, setPokemons, startLoading } from './pokemonSlice'

// const url = 'https://pokeapi.co/api/v2'

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoading())

    // try {
    //   const res = await fetch(`${url}/pokemon?limit=${page * 10}&offset=0`)
    //   const data = await res.json()
    //   console.log(data)

    //   dispatch(setPokemons({
    //     pokemons: data.results,
    //     page
    //   }))
    // } catch (err) {
    //   console.log(err)
    // }

    const { data } = await pokemonApi.get(`/pokemon?limit=${10}&offset=${page * 10}`)

    dispatch(setPokemons({
      pokemons: data.results,
      page
    }))

    dispatch(finishLoading())
  }
}
