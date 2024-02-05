
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import "./About.css"

import React from 'react'
export default function About() {
  return (

    <>



<Navbar/>
<div className="bodyAbout">
<div className="container ">
  <div className="row pt-5">
    <div className="col-sm-12 pt-5 mb-5 mt-5">
<div className="text-center">
  <h2 className="mb-3 fs-1 fw-bolder text-white">ABOUT COMPONENT</h2>
  
<div className='d-flex justify-content-center align-items-center mb-5'>

<div className='line m-3'></div>

<div>
<i className="fa-solid fa-star text-white"></i>
    
</div>

<div className='line m-3'></div>
</div>
</div>

<div className="m-auto d-flex my-auto ">


<div className="parent d-flex px-5 text-white w-100">

<div className="col-md-6 w-50"><p>
Freelancer is a free bootstrap theme created by Route. 
The download includes the complete source files including HTML, 
CSS, and JavaScript as well as optional SASS stylesheets for easy customization.

</p>
</div>
<div className="col-md-6 w-50">
  <p>Freelancer is a free bootstrap theme created by Route.
     The download includes the complete source files including HTML,
      CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
</p></div>
</div>



</div>

    </div>
  </div>
</div>
<Footer/>




</div>




    
    
    
    </>
  )
}
