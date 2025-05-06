import React from "react";
import Pulse from "../images/pulse.png";
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
              <img src={Pulse} alt="logo" className="footer-logo" />
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
            <span>Monday - Tuesday</span>
            <span>9am - 6pm</span>
            </div>
            </div>
              <img src={Line1} alt="line" className="footer-line" />

              <div className="footer-hours">
            <div className="flex flex-row justify-between w-[270px]">
            <span>Wednesday - Thursday</span>
            <span>8am - 5pm</span>
            </div>
            </div>
              <img src={Line1} alt="line" className="footer-line" />

              <div className="footer-hours">
            <div className="flex flex-row justify-between w-[270px]">
            <span>Friday - Saturday</span>
            <span>10am - 7pm</span>
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
                <p>healthaxis@gmail.com</p>
              </div>
            </div>
            <div className="footer-contact">
              <img width={30} src={Location} alt="location" />
              <div>
                <p>Address</p>
                <p>Shayona S-one, R.C. Technical road</p>
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
