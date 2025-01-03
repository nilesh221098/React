import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setCounter] = useState(15)
//let counter= 15
const addvalue = ()=>{
  console.log("clicked", counter);
  //counter= counter+1
  setCounter(counter+1)
}
const removevalue = ()=>{
  console.log("clicked", counter);
  //counter= counter+1
  setCounter(counter-1)
}
  return (
    <>
      
      <h1>counter React</h1>
      <h2>counter value :{counter}</h2>
      <button
      onClick={addvalue}>add value</button> <br/>
      <button
      onClick={removevalue}>remove value: {counter}</button>
    
    </>
  )
}

export default App
