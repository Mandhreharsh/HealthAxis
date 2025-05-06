import React, { useState } from "react";
import Location from "../images/location.png";
import Email from "../images/email.png";
import Phone1 from "../images/phone.png";
import Linkedin from "../images/linkedin.png";
import Instagram from "../images/instagram.png";
import Facebook from "../images/facebook.png";
import { toast } from "react-hot-toast";
import axios from "axios";
import "../css/Message.css";

const Message = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "https://healthaxis.onrender.com/api/v1/message/send",
          { firstName, lastName, Phone, email, message },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="message-container">
      <div className="message-heading Arvo">
        Send a <span className="text">Message</span>
      </div>

      <div className="message-wrapper">
        <div className="message-box">
          <div className="contact-info">
            <div className="contact-title">Contact Information</div>
            <p className="contact-text">
              Get in touch with us for any inquiries or to place an order. We are here to assist you.
            </p>
            <ul className="contact-list">
              <li className="contact-item">
                <img src={Location} alt="Location" />
                Shayona S-one, R.C. Technical road, 388888.
              </li>
              <li className="contact-item">
                <img src={Email} alt="Email" />
                healthaxis@gmail.com
              </li>
              <li className="contact-item">
                <img src={Phone1} alt="Phone" />
                +123-456-789
              </li>
            </ul>
          </div>

          <div className="social-icons">
            <a href=""><img src={Linkedin} alt="LinkedIn" /></a>
            <a href=""><img src={Instagram} alt="Instagram" /></a>
            <a href=""><img src={Facebook} alt="Facebook" /></a>
          </div>
        </div>
        
        <div className="form-section">
          <div className="form-wrapper">
            <div className="form-title">Contact Us</div>
            <form onSubmit={handleMessage} className="contact-form">
              <div className="form-group">
                <label>First Name <sup>*</sup></label>
                <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>

              <div className="form-group">
                <label>Last Name <sup>*</sup></label>
                <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>

              <div className="form-group">
                <label>Email <sup>*</sup></label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="form-group">
                <label>Phone Number <sup>*</sup></label>
                <input type="text" required value={Phone} onChange={(e) => setPhone(e.target.value)} />
              </div>

             <div className="form-message-submit">
             <div className="form-message">
                <label>Message <sup>*</sup></label>
                <textarea required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>

              <div className="form-submit">
                <button type="submit">Submit</button>
              </div>
             </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
