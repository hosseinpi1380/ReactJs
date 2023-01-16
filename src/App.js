import {React, useState} from 'react'

export default function App() {
  const [counter, setCounter]=useState(0);
  const g
  return (
    <div>
      {counter}
      <button onClick={()=>{increase()}}>+</button>
      <button onClick={()=>{decrease()}}>-</button>
    </div>
  )
}
