

import React from 'react'
import imgHome from "../../assets/imgs/Home.svg"
import "./Home.css"
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
export default function Home() {
  return (
    <>
    
<div className='bodyHome'>
<Navbar/>

    <div className='d-flex justify-content-center align-items-center'>

<div>
    <img className='mb-2' src={imgHome} alt="" srcset="" />

    <h3 className='text-white fw-bold fs-3 text-center'>START FRAMEWORK
</h3>

<div className='d-flex justify-content-center align-items-center'>

<div className='line m-3'></div>

<div>
<i className="fa-solid fa-star text-white"></i>
    
</div>

<div className='line m-3'></div>
</div>

<p className='text-white text-center fs-4'>Graphic Artist - Web Designer - Illustrator</p>

    </div>
    </div>

    <Footer/>
</div>
    </>
  )
}
