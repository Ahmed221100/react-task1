

import React from 'react'
import "./Contact.css"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
export default function Contact() {
  return (
    <>
    
<Navbar/>
    <div className='bodyContact mt-5 mb-5'>


<div className='container'>
<div className="row">
  <div className="col-md-12">

<div className="text-center">
  <h2 className=' fw-bolder mb-3 mt-3'>CONATCT SECTION</h2>
  
<div className='d-flex justify-content-center align-items-center mb-5'>
<div className="line2"></div>
<i className="fa-solid fa-star me-3 ms-3"></i>
<div className="line2"></div>
</div>

</div>

<div className="form w-50 mx-auto">
  <div>
  <input type="text" placeholder='userName' className='form-control w-100 border-0 border-bottom py-3 mb-2' />
  <input type="number" placeholder='userAge' className='form-control w-100 border-0 border-bottom py-3 mb-2' />
  <input type="e-mail" placeholder='userEmail' className='form-control w-100 border-0 border-bottom py-3 mb-2' />
  <input type="password" placeholder='userPassword' className='form-control w-100 border-0 border-bottom py-3 mb-2' />
</div>
<button type="button"className='btn1'>send Message</button>
</div>
  </div>
</div>


</div>


<Footer/>

    </div>
    
    
    
    
    
    
    
    </>
  )
}
