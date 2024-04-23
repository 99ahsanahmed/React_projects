import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , meraCounter] = useState(5);

  const addValue = () => {
    if(counter < 20 ){
    meraCounter(counter + 1)
  }
  else{
   counter = 20 
  }
  } 

  const removeValue = () => {
    if( counter > 0){
    (counter - 1)
    meraCounter(counter - 1)
  }
  else{
    counter = 0;
  }
  } 
  return (
   <>
    <h1>Counter Project</h1>
    <h3>Counter Value: {counter} </h3>

    <button onClick={addValue}>Add value</button>
    <button onClick={removeValue}>Remove value </button>
   </>
  )
}

export default App
