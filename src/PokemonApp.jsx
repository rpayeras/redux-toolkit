import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon'

const PokemonApp = () => {
  const dispatch = useDispatch()
  const { pokemons, isLoading, page } = useSelector(state => state.pokemons)

  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  return (
    <>
      <div>PokemonApp</div>
      <hr />
      {isLoading ? <h2>Loading...</h2> : ''}
      <ul>
        {
          pokemons.map(({ name }) => (<li key={name}>{name}</li>))
        }
      </ul>

      <button onClick={() => dispatch(getPokemons(page + 1))}>Next page</button>
    </>
  )
}

export default PokemonApp
