import React from "react";
import reverse from "../images/aaa.png";
import start from "../images/aa.png";
import Registration from "../images/registration.png";
import Checkup from "../images/checkup.png";
import Report from "../images/report.png";
import Care from "../images/care.png";
import "../css/work.css";

const Work = () => {
  return (
    <div className="work-container">
      <div className="work-header">
        <h1 className="work-title">
          Let's See How We <span className="font-bold caladea text-[34px]">Work Process</span>
        </h1>
      </div>

      <div className="work-steps-wrapper">
        <div className="work-step">
          <div className="work-icon">
            <img src={Registration} alt="Registration" />
          </div>
          <h4 className="step-title">Patient Registration</h4>
        </div>

        <img className="arrow arrow-1" src={start} alt="arrow" />

        <div className="work-step">
          <div className="work-icon">
            <img src={Checkup} alt="Checkup" />
          </div>
          <h4 className="step-title">Check-Up</h4>
        </div>

        <img className="arrow arrow-2" src={reverse} alt="arrow" />

        <div className="work-step">
          <div className="work-icon">
            <img src={Report} alt="Report" />
          </div>
          <h4 className="step-title">Get Report</h4>
        </div>

        <img className="arrow arrow-3" src={start} alt="arrow" />

        <div className="work-step">
          <div className="work-icon">
            <img src={Care} alt="Care" />
          </div>
          <h4 className="step-title">Ongoing Care</h4>
        </div>
      </div>
    </div>
  );
};

export default Work;
