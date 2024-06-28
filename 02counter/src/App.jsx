import { useState } from 'react'//hooks method
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);//bts -> let counter but using hook useState, so that ui also changes
  // let counter = 15;//this will never get propagate in ui

  const addValue = () => {
    //log will print first
    // console.log("clicked", counter);//it does'nt get updated in counter problem is ui updation
    // counter = counter + 1;//it increments the value afterwards
    // setCounter(counter + 1)
    // setCounter(counter + 1);//now the ui changes, with updated value
    setCounter((prevCounter) => prevCounter + 1);//so, that it takes the previous value to update
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);//the value is still the same as previous, it will increase by one only
   //as they all are updating the same no. again and again, hence we retrieve previous counter value and add 1
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
     <h1>DAFT PUNK</h1>
     <h2>Song value: {counter}</h2>

     <button
     onClick={addValue}//like javascript we add event here of clicking
     >Add value {counter}</button>
     <br />
     <button
     onClick = {removeValue}
     >Remove value {counter}</button>
      
    </>
  )
}

export default App
