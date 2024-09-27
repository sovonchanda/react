import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter(counter+1)
  
  }
  const removeValue= () =>{
    setCounter(counter-1)

  }
   return (
    <>
      <h1>counter project</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}>addValue:{counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>removeValue:{counter}</button>
    </>
  )
}

export default App
