import { useState } from "react"

function App() {
  const  [color, setColor] = useState('gray') 
  return (
    <>
    <div id='page' className='w-dvw m-0 h-screen' 
    style={{backgroundColor : color }}>

    <button 
    onClick={() => setColor ("red")} className='bg-red-800 text-white ' >red</button>
    <button
    onClick={() => setColor ("pink")}  className='bg-pink-500 text-white' >pink</button>
    <button
    onClick={() => setColor ("black")}  className='bg-zinc-900 text-white' >black</button>
    <button 
    onClick={() => setColor ("blue")} className='bg-blue-500 text-white' >blue</button>
    <button onClick={() => setColor ("yellow")} className='bg-yellow-500 text-white' >yellow</button>

    </div>
   

    {/* <Card  username="Ahsan" btnText="Click me!"/>
    <Card username="Faizan" btnText="Visit me"/> */}
    </>
  )
}

export default App

