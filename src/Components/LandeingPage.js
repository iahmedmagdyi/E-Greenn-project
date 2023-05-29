import React from "react";
import { Link } from "react-router-dom";
const LandeingPage = () => {
  return (
    <div class="div-landing">
      <div class="heading-text">
        <div class="heading-title">
          <div class="welcome-to-e-green">Welcome to E-green</div>
        </div>
        <div class="heading-branches">
          <div class="signup-text">
            <Link to="/Login" style={{textDecoration:"none"}}>
              <p class="welcome-to-e-green1">Sign up</p>
            </Link>
            <h3 class="wel-text">if you are new</h3>
          </div>
          <div class="login-text">
            <p class="welcome-to-e-green1">Log in</p>
            <h3 class="wel-text">if you have an account</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandeingPage;
