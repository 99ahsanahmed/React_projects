import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter]=useState(0);
  let [total, setTotal]=useState(0);
  let [bill, setBill]=useState(0)
  const addValue = () => {
    setCounter(counter + 1);
    setTotal(total + 100)
  }
  const remValue = () => {
    if(counter > 0){
    setCounter(counter - 1);
    setTotal(total - 100)
  }
  }

  const billing= () => {
    if(total > 0){
      setBill(total + 45)
    }
  }
  

  return (
    <div id='main' className='w-screen h-screen bg-neutral-300 grid justify-items-center items-center ' >

      <div id='Details' > current item:{counter}</div>

      <div id='items' className='border-2 border-orange-300 px-4 py-4 w-1/3 h-80 checkout bg-neutral-100'>
      <h2>ITEMS:{counter} || Item price: 100/rs</h2>
      <button className='mb-1' onClick={addValue}>add Item</button>
      <button className='mb-1' onClick={remValue}>Remove Item</button>
      <hr></hr>
      <h2>Total bill:{total}/rs</h2>
      <hr/>
      <button onClick={billing} >BUY NOW</button>
      <h2>Your total with tax is: {bill}</h2>
      </div>

    </div>
  
  )
}

export default App
