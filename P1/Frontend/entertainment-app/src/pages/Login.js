import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className='container'>
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Email address" required/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Password" required/>
        </div>
      </form>
      <button type="submit">Login to your account</button>
      <div className="no-acct">
        <p>Don't have an account? <a href="#">Sign up</a></p>
      </div>
    </div>
  );
}

export default Login;
