import React from 'react'
import Header from './static/Header'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Invest from './pages/Invest'
import Save from './pages/Save'
import Resources from './pages/Resources'
import Stories from './pages/Stories'
import Faqs from './pages/Faqs'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/invest' element={<Invest/>}/>
        <Route path='/save' element={<Save/>}/>
        <Route path='/resources' element={<Resources/>}/>
        <Route path='/stories' element={<Stories/>}/>
        <Route path='/faqs' element={<Faqs/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App