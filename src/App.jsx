import React from 'react'
import './App.css'
import { RouterProvider, Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Aboout from './pages/Aboout'
import Vans, { loader as vansLoader } from './pages/Vans'
import VanDetails, { loader as vanDetailsLoader } from './pages/VanDetails'
import AppLayout from './layouts/AppLayout'
import HostLayout from './layouts/HostLayout'
import Dashboard from './components/hosts/Dashboard'
import Income from './components/hosts/Income'
import Reviews from './components/hosts/Reviews'
import HostVans, { loader as hostVansLoader } from './pages/HostVans'
import HostVanDetatils, { loader as hostVanLoader } from './pages/HostVanDetatils'
import Details from './components/hosts/Details'
import Price from './components/hosts/Price'
import Photos from './components/hosts/Photos'
import NotFound from './pages/NotFound'
import Error from './pages/Error'
import Login, {action}from './pages/Login'
import { checkAuth } from '../utils/loginAuth'

// Define the router with routes and their corresponding components, loaders, and actions
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<AppLayout />}>
    <Route index element={<Home />} />
    <Route path='login' element={<Login />} action={action} />
    <Route path='about' element={<Aboout />} />
    <Route path='vans' element={<Vans />} loader={vansLoader}
      errorElement={<Error />} />
    <Route path='vans/:id' element={<VanDetails />} loader={vanDetailsLoader} errorElement={<Error />} />
    // Host routes
    <Route path='hosts' element={<HostLayout />} loader={checkAuth} errorElement={<Error />} >
      <Route index element={<Dashboard />} />
      <Route path='income' element={<Income />} />
      <Route path='vans' element={<HostVans />} loader={hostVansLoader}
        errorElement={<Error />} />

        // Nested routes for host van details
      <Route path='vans/:id' element={<HostVanDetatils />} loader={hostVanLoader} errorElement={<Error />} >
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
    // The RouterProvider component will render the appropriate component based on the current URL
      <RouterProvider router={router} />
    </>
  )
}

export default App
