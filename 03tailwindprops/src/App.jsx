import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'


function App() {
  const [count, setCount] = useState(0)

  const newobj ={
    Name:'Shazzed',
    age:30,
    post: 'ADBA',
    address:{
      City:'Dhaka'
    }

  }
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3'>Vite with Tailwind</h1>
      <Card username="Shazzed" post ="ADBA" addr={newobj}/>
      <Card/>
      <Card/>
    </>
    
  )
}

export default App
