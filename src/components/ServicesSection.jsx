import React from "react";
import "../css/ServiceSection.css";

const ServicesSection = ({ cares }) => {
  return (
    <div className="ServicesSectionMain">
      <div className="section-heading">
        Other Health Care <span className="highlight">Services</span>
      </div>

      <div className="services-container">
        {cares.map((care, index) => (
          <div className="service-card" key={index}>
            <div className="icon-container">
              <img src={care.image} alt="" />
            </div>
            <div className="service-heading">{care.heading}</div>
            <div className="service-description">{care.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
