import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(5)

  // let counter = 5

  const addvalue = () => {
    // counter++
    setCounter(counter + 1)
    console.log('clicked' ,counter )
  }
  const removevalue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={addvalue}>Add value as now is{counter}</button>
    <br />
    <br />
    <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
