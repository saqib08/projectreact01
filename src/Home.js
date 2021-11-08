// import { extendSxProp } from '@mui/system'
import React from 'react'

const Home = () => {
    return (
       <>
       {/* first card */}
<div className="container my-4">
<div className="row featurette d-flex justify-content-center align-items-center">
<div className="col-md-5 my-4">
<h2 className="featurette-heading" className="fontsize">Personal Training</h2>
<span className="text-muted">Fitness House</span>    
<p className="lead">Certificate 4 Qualified and experienced personal trainers.</p>
</div>
<div className="col-md-5 my-4">
<img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
src="/pt.jpg" ></img>
</div>
</div>


{/* second card */}
<div className="row featurette d-flex justify-content-center align-items-center">
<div className="col-md-5 order-md-2">
<h2 className="featurette-heading" className="fontsize">Kids</h2> <span className="text-muted">Fitness Housse</span>
<p className="lead">Children of all ages will be kept active, engaged and entertained.</p>
</div>
<div className="col-md-5 order-md-1">
<img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
src="/kt.jpg" ></img>
</div>
</div>

{/* third card*/}
<div className="row featurette d-flex justify-content-center align-items-center">
<div className="col-md-5 my-4">
<h2 className="featurette-heading" className="fontsize">Racquets</h2>
<span className="text-muted">Fitness House</span>    
<p className="lead">Play Tennis & Squash on our courts. Professional coaching available.</p>
</div>
<div className="col-md-5 my-4">
<img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
src="/rt.jpg" ></img>
</div>
</div>


{/* fourth card */}
<div className="row featurette d-flex justify-content-center align-items-center">
<div className="col-md-5 order-md-2">
<h2 className="featurette-heading" className="fontsize"> Fitness</h2>
<span className="text-muted">Fitness House</span>
<p className="lead">Cutting-edge equipment and a wide range of studio classes.</p>
</div>
<div className="col-md-5 order-md-1">
<img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
src="/ft.jpg" ></img>
</div>
</div>
</div>





      
   {/* footer start */}
      
<div className="container-fluid bg-gray bg text-light py-5 my-3">
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
               <a href="/Contact" className="btn-footer bg"> Contact Us</a>
            </div>
         </div>
      </div>
      <div className="col-md-6" >
         <div className="row" >
            <div className="col-md-6 px-4" >
               <h6> Help us</h6>
               <div className="row " >
                  <div className="col-md-6 " >
                     <ul >
                        <li > <a href="#"> Home</a> </li>
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
        
    );
}
export default Home;
