import React from 'react';
import TextField from '@mui/material/Button';
function Contact() {
 
    return (
      <>
      
           {/* contact start */}
 <div className="col-md-4 offset-md-4 my-5" align="center" >

<h1 align="center" className="fontsize">Contect Us</h1><br />

<h4>Name:    <br /><br />
<input type="text" className="contact " /></h4>
<br />
<h4>Contact: <br /> <br />
<input type="number" className="contact" /></h4>
<br />
<h4>Email:  <br /><br />
<input type="email" className="contact" /></h4>
<TextField id="standard-basic" label="Standard" variant="standard" />
<br />
  <div className="row">

  <label for="exampleTextarea1" className="form-label"><h4>Message:</h4></label><br />
   <textarea className="contact" id="exampleFormControlTextarea1" rows="3" cols="30" ></textarea><br />
 
  
  <button className="btn btn-outline-dark my-3" >Submit</button>

      </div>  </div>
    
 {/* contact end */}
  
 
 
         
     {/* footer */}
        
          
<div className="container-fluid bg-gray bg text-light py-5 my-3" >
<div className="container">
   <div className="row">
      <div className="col-md-6">
         <div className="row">
            <div className="col-md-6 ">
               <div className="logo-part">
                  <img src="https://i.ibb.co/sHZz13b/logo.png" className="w-50 logo-footer" />
                  <p>7637 Laurel Dr. King Of Prussia, PA 19406</p>
                  <p>Use this tool as test data for an automated system or find your next pen</p>
               </div>
            </div>
            <div className="col-md-6 px-4">
               <h2>Fitness House</h2>
               <p>But horizontal lines can only be a full pixel high.</p>
               <a href="#" className="btn-footer bg"> More Info </a><br/>
               <a href="#" className="btn-footer bg"> Contact Us</a>
            </div>
         </div>
      </div>
      <div className="col-md-6">
         <div className="row">
            <div className="col-md-6 px-4">
               <h6> Help us</h6>
               <div className="row f">
                  <div className="col-md-6">
                     <ul>
                        <li> <a href="#"> Home</a> </li>
                        <li> <a href="#"> About</a> </li>
                        <li> <a href="#"> Service</a> </li>
                        <li> <a href="#"> Team</a> </li>
                        <li> <a href="#"> Help</a> </li>
                        <li> <a href="#"> Contact</a> </li>
                     </ul>
                  </div>
                  <div className="col-md-6 px-4">
                     <ul>
                        <li> <a href="#"> Cab Faciliy</a> </li>
                        <li> <a href="#"> Fax</a> </li>
                        <li> <a href="#"> Terms</a> </li>
                        <li> <a href="#"> Policy</a> </li>
                        <li> <a href="#"> Refunds</a> </li>
                        <li> <a href="#"> Paypal</a> </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="col-md-6 ">
               <h6> Newsletter</h6>
               <div className="social">
                  <a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
               </div>
               <form className="form-footer my-3">
                  <input type="text"  placeholder="search here...." name="search" />
                  <input type="button" value="Go" />
               </form>
             
            </div>
         </div>
      </div>
   </div>
</div>
</div>

</>
    )
}
export default Contact;
