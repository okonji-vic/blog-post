import React from 'react'
import Home from './components/home'
import Blog from './components/Blog'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Custom404 from './components/custom404'
// import {createContext, useContext} from 'react'

// const ThemeContext = createContext(null)
  


function App() {
  // const [theme, setTheme] = React.useState('light')
  
  return (
    // <ThemeContext.Provider value={theme}>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Custom404 />} />
        
      </Routes>
      {/* <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          
          }}
        />Use dark mode
         */}
    </div>
    
    // </ThemeContext.Provider> 
  )
}

export default App
// export {ThemeContext}
