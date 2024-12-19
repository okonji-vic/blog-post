import React from 'react'
import Home from './components/home'
import Blog from './components/Blog'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Custom404 from './components/custom404'


function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="*" element={<Custom404/>}/>
    </Routes>
    </>
  )
}

export default App
