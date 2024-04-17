import { useState } from 'react'
import './App.css'
import Header from './component/header/Header'
import Menu from './component/menu/Menu'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />   
      <Menu />
    </>
  )
}

export default App
