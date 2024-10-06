
import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFoundPage from './pages/NotFoundPage';
import Products from './pages/Products';
import Header from './components/Header';
import AboutCompany from './pages/AboutCompany';
import AboutEmployee from './pages/AboutEmployee';
import ProductDetails from './pages/ProductDetails';


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/about' element={<About />}>
          <Route path='company' element={<AboutCompany />} />
          <Route path='employee' element={<AboutEmployee />} />
        </Route>
        <Route path='/products' element={<Products />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFoundPage />} />

      </Routes>
    </div>
  )
}

export default App
