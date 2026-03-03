import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Aboout from './pages/Aboout'
import Vans from './pages/Vans'
import VanDetails from './pages/VanDetails'
import AppLayout from './components/AppLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<Aboout></Aboout>}></Route>
            <Route path='/vans' element={<Vans></Vans>}></Route>
            <Route path='/vans/:id' element={<VanDetails></VanDetails>}></Route>
          </Route>
        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App
