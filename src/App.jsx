import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Aboout from './pages/Aboout'
import Vans from './pages/Vans'
import VanDetails from './pages/VanDetails'
import AppLayout from './layouts/AppLayout'
import HostLayout from './layouts/HostLayout'
import Dashboard from './components/hosts/Dashboard'
import Income from './components/hosts/Income'
import Reviews from './components/hosts/Reviews'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path ='/' element={<AppLayout />}>
                //Vans router
            <Route index element={<Home></Home>}></Route>
            <Route path='about' element={<Aboout></Aboout>}></Route>
            <Route path='vans' element={<Vans></Vans>}></Route>
            <Route path='vans/:id' element={<VanDetails></VanDetails>}></Route>

            // Hosts router
            <Route path='hosts' element={<HostLayout />}>
              <Route index element={<Dashboard />}></Route>
              <Route path='income' element={<Income />}></Route>
              <Route path='reviews' element={<Reviews />}></Route>
            </Route>

          </Route>

        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App
