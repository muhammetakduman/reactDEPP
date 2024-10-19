import React from 'react'
import RouterConfig from './config/RouterConfig'
import './App.css'
import Navbar from './components/Navbar'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



function App() {
  return (
    <div>
      <Navbar />
      <RouterConfig />
      <ToastContainer />
    </div>
  )
}

export default App