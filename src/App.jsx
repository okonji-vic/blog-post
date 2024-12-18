import React from 'react'
import Home from './components/home'
import Blog from './components/Blog'
import './App.css'
import { Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="blog" element={<Blog/>}/>
      

    </Routes>
    

    </>
  )
}

export default App
