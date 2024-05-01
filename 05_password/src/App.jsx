import { useState, useCallback, useEffect  } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  
  const passwordGenerate = useCallback (function fn(){
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number) str += "123456789";
    if(character) str += "!@#$%^&*(";

    for (let i = 0; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length,number,character, setPassword])
  
  useEffect(()=>{
    passwordGenerate()
  },[length, number, character, passwordGenerate])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <input 
      type="text"
      value={password}
      className="outline-none w-full py-1 px-3"
      placeholder="Password"
      readOnly 
      />
      <button
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
    </div>

    <div  className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
      <input 
        type="range"
        min={8}
        max={18}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={() => {
              setNumber((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">numbers</label>
      </div>

      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={character}
          id="charInput"
          onChange={() => {
              setCharacter((pichlaTick) => !pichlaTick);
          }}
      />
      <label htmlFor="charInput">Character</label>
      </div>
    </div>
    </>
  )
}

export default App
 