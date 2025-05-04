import React from "react";
import availbility from "../images/availability.png";
import Line1 from "../images/line1.png";
import Location from "../images/location.png";
import Email from "../images/email.png";
import Phone1 from "../images/phone.png";
import Linkedin from "../images/linkedin.png";
import Instagram from "../images/instagram.png";
import Facebook from "../images/facebook.png";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-bg">
        <div className="footer-container">
          <div className="footer-column">
            <div className="footer-logo-text">
              <img src={availbility} alt="logo" className="footer-logo" />
              <span className="footer-heading">Health Axis</span>
            </div>
            <p className="footer-description">
              A hospital website typically serves as an online platform to provide essential information to patients and staff. It is designed to provide important services and updates.
            </p>
            <div className="footer-icons">
              <img src={Linkedin} alt="linkedin" />
              <img src={Instagram} alt="instagram" />
              <img src={Facebook} alt="facebook" />
              <img src={Email} alt="email" />
              <img src={Phone1} alt="phone" />
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-subheading">Departments</h3>
            <ul className="footer-list">
              <li>Medicine</li>
              <li>Neurology</li>
              <li>Eye Care</li>
              <li>Cardiology</li>
              <li>Dental Care</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-subheading">Opening Hours</h3>

            <div className="footer-hours">
            <div className="flex flex-row justify-between w-[270px]">
            <span>Wednesday - Friday</span>
            <span>10am - 4pm</span>
            </div>
            </div>
              <img src={Line1} alt="line" className="footer-line" />

              <div className="footer-hours">
            <div className="flex flex-row justify-between w-[270px]">
            <span>Wednesday - Friday</span>
            <span>10am - 4pm</span>
            </div>
            </div>
              <img src={Line1} alt="line" className="footer-line" />

              <div className="footer-hours">
            <div className="flex flex-row justify-between w-[270px]">
            <span>Wednesday - Friday</span>
            <span>10am - 4pm</span>
            </div>
            </div>
              <img src={Line1} alt="line" className="footer-line" />
          </div>

          <div className="footer-column">
            <h3 className="footer-subheading">Get In Touch</h3>
            <div className="footer-contact">
              <img width={30} src={Phone1} alt="phone" />
              <div>
                <p>Phone Number</p>
                <p>+123-456-789</p>
              </div>
            </div>
            <div className="footer-contact">
              <img width={30} src={Email} alt="email" />
              <div>
                <p>Email</p>
                <p>hello@example.com</p>
              </div>
            </div>
            <div className="footer-contact">
              <img width={30} src={Location} alt="location" />
              <div>
                <p>Address</p>
                <p>124, Western Road, Melbourne Australia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-bottom">
        © 2024 HealthAxis. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Footer;
