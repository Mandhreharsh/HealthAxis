import React from "react";
import Pulse from "../images/pulse.png";
import Expert from "../images/doctorIcon.png";
import EmergencyCare from "../images/ambulance.png";
import Availibility from "../images/availibility1.png";
import "../css/Label.css";

const Label = () => {
  return (
    <div className="label-container">
      <div className="label-content">
        <div className="label-header">
          <img src={Pulse} alt="Pulse" className="pulse-img" />
          <h1 className="label-title">
            Health<span>Axis</span>
          </h1>
        </div>

        <div className="label-cards">
          <div className="label-card">
            <img src={Expert} alt="Expert Doctors" />
            <h6>Expert Doctors</h6>
            <p>
              Our team of highly skilled and experienced doctors is dedicated to providing healthcare services.
            </p>
          </div>

          <div className="label-card">
            <img src={EmergencyCare} alt="Emergency Care" />
            <h6>Emergency Care</h6>
            <p>
              Emergency departments are dedicated to stabilizing patients and addressing urgent needs.
            </p>
          </div>

          <div className="label-card">
            <img src={Availibility} alt="24/7 Availability" />
            <h6>24/7 Availability</h6>
            <p>
              Our team of dedicated doctors and support staff is available 24/7 to address urgent health needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Label;
