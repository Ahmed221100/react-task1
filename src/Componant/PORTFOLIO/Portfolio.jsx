

import React from 'react'
import imgPortofilo from '../../assets/imgs/Home.svg'
import img1 from '../../assets/imgs/1.jpg'
import img2 from '../../assets/imgs/1_New1.jpg'
import img3 from '../../assets/imgs/2.jpg'
import "./Portfolio.css"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
export default function Portfolio() {
  return (
    <>
    
    <Navbar/>
    <div className="bodyPortfolio">


    <div className="container">
      <div className="row">
      <div className="col-md-12">
         
         <div className='pt-4'>

         <h2 className="fw-bolder mb-3 mt-3 text-center">PORTFOLIO COMPONENT</h2>
          
          <div className='d-flex justify-content-center align-items-center mb-5'>
          <div className="line2"></div>
          <i className="fa-solid fa-star me-3 ms-3"></i>
          <div className="line2"></div>
          </div>
         </div>
      
      </div>
      </div>
      </div>
    
    

<div className="container">
  <div className="row">
  <div className="col-md-4">
      <div className="img position-relative rounded-3 overflow-hidden ">
        <img src={img3} className='w-100 rounded-3' alt="" />
        <div className='layer position-absolute start-0 w-100 top-0 h-100 mt-4 d-flex justify-content-center align-items-center'>
        <i className="fa-solid fa-users-line fa-2x text-white"></i>

        </div>
      </div>
    </div> 
    <div className="col-md-4">
      <div className="img position-relative rounded-3 overflow-hidden ">
        <img src={img2} className='w-100 rounded-3' alt="" />
        <div className='layer position-absolute start-0 w-100 top-0 h-100 mt-4 d-flex justify-content-center align-items-center'>
        <i className="fa-solid fa-users-line fa-2x text-white"></i>

        </div>
      </div>
    </div> 
    <div className="col-md-4">
      <div className="img position-relative rounded-3 overflow-hidden ">
        <img src={img1} className='w-100 rounded-3' alt="" />
        <div className='layer position-absolute start-0 w-100 top-0 h-100 mt-4 d-flex justify-content-center align-items-center'>
        <i className="fa-solid fa-users-line fa-2x text-white"></i>

        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="img position-relative rounded-3 overflow-hidden ">
        <img src={img3} className='w-100 rounded-3' alt="" />
        <div className='layer position-absolute start-0 w-100 top-0 h-100 mt-4 d-flex justify-content-center align-items-center'>
        <i className="fa-solid fa-users-line fa-2x text-white"></i>

        </div>
      </div>
    </div> <div className="col-md-4">
      <div className="img position-relative rounded-3 overflow-hidden ">
        <img src={img1} className='w-100 rounded-3' alt="" />
        <div className='layer position-absolute start-0 w-100 top-0 h-100 mt-4 d-flex justify-content-center align-items-center'>
        <i className="fa-solid fa-users-line fa-2x text-white"></i>

        </div>
      </div>
    </div> <div className="col-md-4">
      <div className="img position-relative rounded-3 overflow-hidden ">
        <img src={img2} className='w-100 rounded-3' alt="" />
        <div className='layer position-absolute start-0 w-100 top-0 h-100 mt-4 d-flex justify-content-center align-items-center'>
        <i className="fa-solid fa-users-line fa-2x text-white"></i>

        </div>
      </div>
    </div>
  </div>
</div>

    </div>
    <Footer/>
    
    
    

    
    
    
    
    
    
    
    
    
    </>
  )
}
