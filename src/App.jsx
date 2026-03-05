import React from 'react'
import './App.css'
import { RouterProvider,  Route, createRoutesFromElements,createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Aboout from './pages/Aboout'
import Vans from './pages/Vans'
import VanDetails from './pages/VanDetails'
import AppLayout from './layouts/AppLayout'
import HostLayout from './layouts/HostLayout'
import Dashboard from './components/hosts/Dashboard'
import Income from './components/hosts/Income'
import Reviews from './components/hosts/Reviews'
import HostVans from './pages/HostVans'
import HostVanDetatils from './pages/HostVanDetatils'
import Details from './components/hosts/Details'
import Price from './components/hosts/Price'
import Photos from './components/hosts/Photos'
import NotFound from './pages/NotFound'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<AppLayout />}>
    <Route index element={<Home />} />
    <Route path='about' element={<Aboout />} />
    <Route path='vans' element={<Vans />} />
    <Route path='vans/:id' element={<VanDetails />} />
    <Route path='hosts' element={<HostLayout />}>
      <Route index element={<Dashboard />} />
      <Route path='income' element={<Income />} />
      <Route path='vans' element={<HostVans />} />
      <Route path='vans/:id' element={<HostVanDetatils />}>
        <Route path='details' element={<Details />} />
        <Route path='photos' element={<Photos />} />
        <Route path='price' element={<Price />} />
      </Route>
      <Route path='reviews' element={<Reviews />} />
    </Route>
    <Route path='*' element={<NotFound />} />
  </Route>
))


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
