

import React from 'react'
import Home from './Componant/Home/Home'
import About from './Componant/About/About'
import Contact from './Componant/CONTACT/Contact'
import Navbar from './Componant/Navbar/Navbar'
// import Footer from './Componant/Footer/Footer'
import Portfolio from './Componant/PORTFOLIO/Portfolio'
import Footer from './Componant/Footer/Footer'
import {RouterProvider,createBrowserRouter}from 'react-router-dom'
export default function App() {

 let routs= createBrowserRouter([
    { path:'/',element:<h1><Home/></h1>},
     { path:'/About',element:<h1><About/></h1>},
      {path:'/Portfolio',element:<h1><Portfolio/></h1>},
      {path:'/Contact',element:<h1><Contact/></h1>},
    
  ])

  return (
    <>

<RouterProvider router={routs}/>
{/* <Portfolio/> */}
{/* <About/> */}
{/* <Contact/> */}
{/* <Home/> */}
{/* <Navbar/> */}
{/* <Home/> */}
    {/* <div><Navbar/></div> */}
    {/* <div><Home/></div> */}

    </>
    
    
  )
}
