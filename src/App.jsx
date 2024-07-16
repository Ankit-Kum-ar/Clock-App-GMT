import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Browser from './pages/Browser'

function App() {
  return (
   <div>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/browser" element={<Browser/>}></Route>
      </Routes>
   </div>
  )
}

export default App
