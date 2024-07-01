import React from "react";
import "./Signup.css";
import {ReactComponent as Logo} from './logo.svg';

const Signup = () => {
  return (
    <div class="center-box">
      <Logo />
      <div className="container">
        <form action="">
          <h1>Sign Up</h1>
          <div className="input-box">
            <input type="text" placeholder="Email address" required />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Password" required />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Repeat password" required />
          </div>
        </form>
        <button type="submit">Create an account</button>
        <div>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
