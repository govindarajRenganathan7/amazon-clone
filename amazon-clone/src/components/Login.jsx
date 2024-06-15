import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/loginlogo.jpg"
import './login.css'

const Login = () => {
  return (
    <div className='login'>
      <Link to= '/'>
        <img src={logo} alt='logo' className='signinlogo'/>
      </Link>
      <div className="container">
    <div className='subcontainer'>
      <h1>Signin</h1>
      <form>
        <h5>Name</h5>
        <input type='text'/>
        <h5>Email</h5>
        <input type='email'/>
        <button>sign in</button>
        <p>By continuing, you agree to Amazon's  <a href="#">Conditions of Use</a> and  <a href="#">Privacy Notice</a>.</p>
      </form>
      </div>
    </div>
    </div>
  )
}

export default Login
