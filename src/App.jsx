import React from 'react'
import { Container } from '@mui/material'
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './components/Home/Home'
import { Projects } from './components/Projects/Projects'
import { HashRouter, Route, Routes } from 'react-router-dom'

function App() { 

  return (
    <>
    <HashRouter>
      <Container maxWidth={'xl'} sx={{marginX: 'auto'}} > 
          <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Projects />} /> 
        </Routes>
      </Container>
    </HashRouter>
    
    </>
  )
}

export default App 