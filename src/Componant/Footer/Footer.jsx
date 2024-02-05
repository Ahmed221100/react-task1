
import "./Footer.css"

import React from 'react'
export default function Footer() {
  return (
    <>
    
    
<div className='f-footer mt-0'>


<footer className="text-center text-muted">
 
  <section>
    <div className="container text-center text-md-start mt-5">
      {/* Grid row */}
      <div className="row ">
      
        <div className="col-md-4 col-lg-4 col-xl-2 mx-auto mb-4 pt-5">
          {/* Links */}
          <h3 className="text-uppercase text-white mb-4 fs-5 ">
          LOCATION
          </h3>
         
            <p className="text-white fs-6">2215 John Daniel Drive</p>
         
         
            <p className="text text-white fs-6">Clark, MO 65243</p>
         
         
        </div>
        
        <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-2 pt-5">
          {/* Links */}
          <h3 className="text-uppercase text-white mb-1 fs-5"  style={{fontSize: 'calc(1.3rem + .6vw);'}}>
          AROUND THE WEB
          </h3>
          <div>
      <a href className="me-4 text-reset">
        <i className="fab fa-facebook-f text-white border border-2 rounded-circle" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-twitter text-white border border-2 rounded-circle " />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-linkedin text-white border border-2 rounded-circle " />
      </a>
      <a href className="me-4 text-reset">
      <i className="fa-solid fa-globe text-white border border-2 rounded-circle " />
      </a>
      

    </div>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 pt-5">
          {/* Links */}
          <h3 className="text-uppercase text-white mb-4 fs-4 ">
            ABOUT FREELANCER</h3>
          <p className='text-white fs-6'>Freelance is a free to use,licensed Bootstrap theme created by Route</p>
        
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  
  <div className="text-center p-4 fs-6" style={{backgroundColor: '#1a252f',color:"#f0f8ff"}}>
    Copyright © Your Website 2021
  </div>
  {/* Copyright */}
</footer>
{/* Footer */}


</div>

    </>
  )
}
