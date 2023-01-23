import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Componenets/Home'
import Login from './Componenets/Login'
import Register from './Componenets/Register'
import Thank from './Componenets/Thank'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path='/tnx' element={<Thank/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
