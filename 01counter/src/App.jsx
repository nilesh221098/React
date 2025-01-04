import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

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
let myobject= {
  name:"nilesh",
  age:24
}
let newArr =[0,1,2,3]
  return (
    <>
     
      <h1 className='bg-green-400 p-4 rounded-xl'>counter React</h1>
      <h2>counter value :{counter}</h2>
      <button
      onClick={addvalue}>add value</button> <br/>
      <button className='mb-4'
      onClick={removevalue}>remove value: {counter}</button>
  
    <Card name="nilesh" someboj={myobject} btnText="visit me"/>
    <Card name="Demo" />

  
    </>
  )
}

export default App
