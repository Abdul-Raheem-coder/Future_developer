import React from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Weather from './pages/Weather'
import TodoPage from './pages/TodoPage'
import About from './pages/About'
import Footer from './component/Footer'


export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/weather" element={ <Weather/> } />
        <Route path="/todoage" element={<TodoPage/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
        <Footer />  
    </div>
  )
}
