import React from "react";
import AppointmentDoctor from "../images/Appointment Doctor.png";
import "../css/AppointmentHeader.css";

const Appointment = () => {
  return (
    <div className="appointment-container">
      <div className="appointment-content">
        <div className="appointment-text">
          <h2><span className="caladea heading">Book Your Appointment Today for</span></h2>
          <h2><span className="caladea heading">Expert Care and Treatment</span></h2>
          <h2 className="description Arvo">
            Scheduling your appointment with our skilled medical professional is quick and easy. 
            We offer convenient online booking and flexible hours to accommodate your needs.
          </h2>
        </div>
        <div className="appointment-image">
          <img src={AppointmentDoctor} alt="Appointment Doctor" />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
