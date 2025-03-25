import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  )
}

export default App
