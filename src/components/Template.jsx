import React from "react";
import Login2 from "../images/login2.png";
import { Context } from "../index";
import Ellipse from "../images/ellipse.png";
import Loginanimation from "../images/loginanimation.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Signupform from "./Signupform";
import Loginform from "./Loginform";
import "../css/Template.css"; 

const Template = ({ formtype, setIsLoggedIn }) => {
  return (
    <div className="template-container">
      <div className="template-box">
        <div className="template-left">
          <div className="ellipse-img">
            <img src={Ellipse} alt="" />
          </div>
          <div className="login-animation">
            <img src={Loginanimation} alt="" />
          </div>
          <div className="welcome-text">
            <div className="welcome-heading"><strong>Welcome Back!</strong></div>
            <div className="welcome-description">
              Please enter your credentials to access your account. If you don’t have an account yet, sign up to get started.
            </div>
          </div>
        </div>

        <div className="template-right">
          <div className="login-img">
            <img src={Login2} alt="" />
          </div>
          <div className="form-container">
            {
              formtype === "signup" ?
                (<Signupform setIsLoggedIn={setIsLoggedIn} />)
                : (<Loginform setIsLoggedIn={setIsLoggedIn} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
