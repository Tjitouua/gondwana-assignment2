import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './pages/Index'
import Booking from './pages/Booking'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
     <BrowserRouter>
          <Routes>
              <Route path="/" element={<Index />}></Route>
              <Route path="/booking" element={<Booking />}></Route>
          </Routes>
     </BrowserRouter>
  )
}

export default App
