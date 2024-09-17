import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TimeTable from './Components/TimeTable/TimeTable'
import TTable from './Pages/TTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/table' element={<TTable/>}  />
        </Routes>
      </Router>

    {/* <Home/>
    <TTable/> */}
    </>
  )
}

export default App
