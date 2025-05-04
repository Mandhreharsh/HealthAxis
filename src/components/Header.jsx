import React from "react";
import "../css/Header.css";
import Doctor from "../images/Doctorimg.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-text">
          <h1>
            We help patients <span>lives a healthy,</span> longer life.
          </h1>
          <p>
            We deliver comprehensive healthcare solutions tailored to your needs. From preventive care to advanced treatments, our experienced team is here to support your well-being.
          </p>
          <div className="header-buttons">
            <button className="btn-primary" onClick={() => navigate("/appointment")}>Appointment</button>
            <button className="btn-secondary"  onClick={() => navigate("/")}>Contact Us</button>
          </div>
        </div>
        <div className="header-image">
          <img src={Doctor} alt="Doctor" />
        </div>
      </div>
    </div>
  );
};

export default Header;
