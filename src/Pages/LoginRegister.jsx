import React from "react";
import  { useState } from "react"
import Navbar from "../Components/Header";
import Footer from "../Components/Footer";
import Swal from 'sweetalert2'
import "../Cssfiels/LoginRegister.css";
import "bootstrap/dist/css/bootstrap.min.css"
function LoginRegister (){
  const [registerfullname,setRegisterfullname] = useState();
  const [registerusername,setRegisterusername] = useState();
  const [registerpassword,setRegisterpassword] = useState();
  const [loginusername,setLoginusername] = useState();
  const [loginPassword,setLoginpassword] = useState();
  const handleRegister = async (e) =>{
    Swal.fire({ 
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }
    const[authMode, setAuthMode] = useState("signin")

    const changeAuthMode = () => {
      setAuthMode(authMode === "signin" ? "signup" : "signin")
    }
    if (authMode === "signin") {
    return(  
        <>
         <Navbar />
         <div className="school">
         <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title" >Log In</h3>
          <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode} style={{cursor:"pointer"}}>
                Sign Up
              </span>
            </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
        </div>
        <Footer />
        </>
        
    )
    }
    return (
        <>
        <Navbar />
        <div className="school">
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={handleRegister}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Already registered?{" "}
                <span className="link-primary" onClick={changeAuthMode} style={{cursor:"pointer"}}>
                  Sign In
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="e.g Jane Doe"
                  required
                  onChange={(e) => setRegisterfullname(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>User Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Email Address"
                  required
                  onChange={(e) => setRegisterusername(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Password"
                  required
                  onChange={(e) => setRegisterpassword(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </form>
        </div>
        </div>
        <Footer />
        </>
      )
}
export default LoginRegister;