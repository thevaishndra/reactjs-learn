import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*"

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])/*added setPassword which is a method in dependencies as, we will change things on the basis of this*/
  
  const copyPasswordToClipboard = useCallback(() => {/*useCallBack memorises the function */
    passwordRef.current?.select();/*highlights the selected part to copy */
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password)/*we can only use windows in core react, otherwise we dont use it in other like nextjs*/
  }, [password])
  
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])/*generation of password*/
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
        type="text"
        value= {password}
        className='outline-none w-full py-1 px-3'
        placeholder="Password"
        readOnly
        ref={passwordRef}/*ui shows password*/
        />
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-500'>copy</button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" 
          min={6}
          max={20}
          value={length}
          className="cursor-pointer"
          onChange={(e) => {setLength(e.target.value)}}/*length scroller */
          />
          <label>Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
          type="checkbox"
          defaultChecked={numberAllowed}/*number checkbox*/
          id="numberInput"
          onChange={() => {
            setNumberAllowed((prev) => !prev); /*reverse the previous value */
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
          type="checkbox"
          defaultChecked={charAllowed}/*character checkbox*/
          id="characterInput"
          onChange={() => {
            setCharAllowed((prev) => !prev); /*reverse the previous value */
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
