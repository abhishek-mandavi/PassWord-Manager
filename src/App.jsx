import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Manage from './components/Manage'
import Footer from './components/Footer'

function App() {

  return (
    <>
     <Navbar/>
     <div className='min-h-[87vh]'>
      <Manage/>
     </div>
     
     <Footer/>
    </>
  )
}

export default App
