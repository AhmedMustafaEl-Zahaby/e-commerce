import React from "react";
import "./CSS/LoginSignUp.css";
function LoginSignUp() {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Log In</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>
            I agree to the <span>Terms</span> and <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
