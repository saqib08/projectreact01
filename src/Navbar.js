import React from 'react';
import { Link } from "react-router-dom";
import {Carousel} from 'react-bootstrap'; 



function Navbar() {
 
 
  return (
    <>
     
        <nav className="navbar navbar-expand-lg d-flex navbar-dark  fixed-top" >
         <div className="container-fluid ">
            <a className="navbar-brand" href="#"><img src="/logo.jpg" alt=""  className="logo"/></a>
            <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active " aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/about">About us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/contact">Contact us</Link>
                </li>
                  <img src="/git.png" alt="github" className="logo" />

              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search"  />
                <button className="btn btn-lg btn-dark mx-1" type="submit">Search</button>
              </form> <br/>
            
                <div className="mx-2">
                <button className="btn btn-lg btn-dark mx-1"  data-bs-toggle="modal" data-bs-target="#loginModal">login</button>
                  <button className="btn btn-lg btn-dark mx-1"  data-bs-toggle="modal" data-bs-target="#signupModal">Signup</button>
                </div>
                </div>
    
          </div></nav>
         
          
    {/* Login Modal */}
        <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="loginModalLabel" className="md" className="fontsize">Login</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form action="/action_page.php ">
            <div className="form-group">
              <label for="email">Email address:</label>
              <input type="email" className="form-control" placeholder="Enter email" id="email" required/>
            </div><br/>
            <div className="form-group">
              <label for="pwd">Password:</label>
              <input type="password" className="form-control" placeholder="Enter password" id="pwd" required/>
            </div><br/>
            <div className="form-group form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox"/> Remember me
              </label>
            </div><br/>
            <button type="submit" className="btn btn-lg btn-dark">Submit</button>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>

        </div>
      </div>
    </div>
  </div>
  {/* Signup modal */}
  <div className="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="signupModalLabel" className="md" className="fontsize">Signup</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form action="/action_page.php ">
            <div className="form-group">
              <label for="first_name">Fisrt_Name:</label>
              <input type="first_name" className="form-control" placeholder="enter your name" id="first_name" required/>
            </div><br/>
            <div className="form-group">
              <label for="last_name">Last_Name:</label>
              <input type="last_name" className="form-control" placeholder="enter your last name" id="last_name" required/>
            </div><br/><div className="form-group">
              <label for="email">Email:</label>
              <input type="email" className="form-control" placeholder="enter your email" id="email" required/>
            </div><br/>
            <div className="form-group">
              <label for="phone">Phone:</label>
              <input type="number" className="form-control" placeholder="enter your phone number" id="phone" required/>
            </div><br/>
            <div className="form-group">
              <label for="pwd">Password:</label>
              <input type="password" className="form-control" placeholder="enter a new password" id="pwd" required/>
            </div><br/>
            <div className="form-group form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox"/><label>I agree for Next Gen to contact me about future offers and promotions</label>
              </label>
            </div><br/>
            <button type="submit" className="btn btn-lg btn-dark">Submit</button>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>

        </div>
      </div>
    </div>
  </div>
 

          
     
  {/* Slider */}
    <Carousel >
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="/sd.jpg"
      alt="First slide"
    />
    <Carousel.Caption >
    <h1 className="animated"><span></span></h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

      
     
     

    
   

 
      

    </>
  );
}
export default Navbar;

