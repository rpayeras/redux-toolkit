import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

import { decrement, increment, incrementByAmount } from './store/slices/counter'

function App () {
  const { counter } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          Count is: {counter}
        </p>
        <p>
          <button type="button" onClick={() => dispatch(increment())}>
            Increment
          </button>
        </p>
        <p>
          <button type="button" onClick={() => dispatch(decrement())}>
            Decrement
          </button>
        </p>
        <p>
          <button type="button" onClick={() => dispatch(incrementByAmount(1))}>
            Increment By
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
