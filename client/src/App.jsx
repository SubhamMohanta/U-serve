import * as React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import ParentContext from './context/ParentContext';
import Home from './components/Home/Home';
import Lenis from '@studio-freight/lenis'
import Login from './components/login/Login';



function App() {

  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return (

    <ChakraProvider>
      <ParentContext>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/confirm' element={<Login />} />
          </Routes>
        </BrowserRouter>
        <ParentContext />
      </ParentContext>
    </ChakraProvider>
  )
}

export default App
