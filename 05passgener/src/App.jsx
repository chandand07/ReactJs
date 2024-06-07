import { useState , useCallback , useEffect } from 'react'

function App() {
  const [lenght , setLength] = useState(8)
  const [numberall , setnumberall] = useState(false)
  const [charall, setcharall] = useState(false)
  const [pass , setpass] = useState("")

  
  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberall) str += "0123456789"
    if(charall) str += "!@#$%^&*(){}[];':<>.,/?\|`~"

    for (let i = 1; i < lenght; i++) {
      let indexvalue = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(indexvalue)
    }

    setpass(pass)

  } ,[lenght , numberall , charall , setpass])
  // second one is dependencies
  useEffect(() => {
    passwordgenerator()
  },[lenght,numberall,charall,passwordgenerator])

  return (
    <>
      <div className = "w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-700 text-orange-700 py-3">
        <h1 className = "text-white text-center my-3">Password generator</h1>
        <div className = "flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
          value = {pass}
          className = "outline-none w-full py-1 px-3"
          placeholder='Password' 
          readOnly/>
          <button className = "outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
          <input 
        type="range"
        min={6}
        max={100}
        value={lenght}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {lenght}</label>
          </div>
          <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberall}
          id="numberInput"
          onChange={() => {
              setnumberall((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charall}
              id="characterInput"
              onChange={() => {
                  setcharall((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
        </div>
      </div>
    </>
  )
}

export default App
