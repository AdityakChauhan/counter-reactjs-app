import { useState } from 'react'
import './App.css'

let lock = false;

function ShowLock() {
  if (lock) {
    alert('Lock is On')

  }
  else {
    alert('Lock is Off')
  }
}

function App() {
  const [count, setCount] = useState(0)

  function handleIncrement() {
    if (!lock) {
      setCount(count + 1)
    }
    else ShowLock()

  }

  function handleDecrement() {
    if (!lock) {
      setCount(count - 1)
    }
    else ShowLock()

  }

  function handleSetZero() {
    if (!lock) {
      setCount(0)
    }
    else ShowLock()
  }

  function isLock() {
    lock = !lock
    ShowLock()
  }

  return (
    <div className='Appp'>
      <div className='showcounter'>
        <h1>{count}</h1>
      </div>
      <div className='actionsContainer'>
        <button className='decrement' onClick={handleDecrement}>Decrement</button>
        <button className='setZero' onClick={handleSetZero}>Set Zero</button>
        <button className='increment' onClick={handleIncrement}>Increment</button>
      </div>
      <div className='lockContainer'>
        <button className='lock' onClick={isLock}>Lock</button>
      </div>
    </div>
  )
}

export default App
