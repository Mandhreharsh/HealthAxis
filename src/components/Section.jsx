import React from "react";
import "../css/Section.css";

const Section = ({ services }) => {
  return (
    <div className="section-container">
      <h1 className="section-heading">
        We serve in different <span className="text">Areas for</span>
      </h1>
      <h1 className="section-head">
        <span className="text">Our Patients</span>
      </h1>

      <div className="services-wrapper">
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <img src={service.image} alt="" />
              </div>
              <div className="service-title">{service.heading}</div>
              <div className="service-description">{service.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
