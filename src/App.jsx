import React from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
// import Home from './pages/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer>  </Footer>
    </BrowserRouter>
    </>
  )
}

export default App
