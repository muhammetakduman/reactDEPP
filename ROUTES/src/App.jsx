
import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFoundPage from './pages/NotFoundPage';
import Products from './pages/Products';
import Header from './components/Header';


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  )
}

export default App
