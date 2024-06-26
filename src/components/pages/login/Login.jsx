import React from 'react'
import "../login/login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login">
    <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" className="loginInput" placeholder="Enter your email..."/>
        <label>Password</label>
        <input type="text" className="loginInput" placeholder="Enter your password..."/>
      <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">Register</button>
      
      <Link className="link" to="/register">Register</Link>
  
    </div>

  )
}

export default Login