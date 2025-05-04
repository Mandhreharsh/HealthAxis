import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from "react-hot-toast";

import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import AppointmentHeader from "../components/AppointmentHeader";

import "../css/Appointment.css";

const Appointment = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [doctor, setDoctor] = useState("");

  const [doctors, setDoctors] = useState([]);

  const departmentsArray = [
    "Pediatrics", "Orthopedics", "Cardiology", "Neurology",
    "Oncology", "Radiology", "Physical Therapy", "Dermatology", "ENT"
  ];

  const doctorsArray = [
    "Emily Carter", "Daniel Smith", "Sophia Lee", "James Brown",
    "Olivia Taylor", "William Davis"
  ];

  // useEffect(() => {
  //   const fetchDoctors = async () => {
  //     try {
  //       const { data } = await axios.get("http://localhost:4000/api/v1/user/doctors", {
  //         withCredentials: true
  //       });
  //       setDoctors(data.doctors);
  //     } catch (error) {
  //       toast.error("Failed to fetch doctors");
  //     }
  //   };
  //   fetchDoctors();
  // }, []);

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:7000/api/v1/appointment/post",
        {
          firstName,
          lastName,
          email,
          Phone,
          dob,
          gender,
          appointment_date: appointmentDate,
          department,
          doctor,
          address,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      // Reset fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setDob("");
      setGender("");
      setAppointmentDate("");
      setDepartment("Pediatrics");
      setDoctorFirstName("");
      setDoctorLastName("");
      setAddress("");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      <div className="appointment-container">
        <AppointmentHeader />

        <div className="appointment-wrapper">
          <h2 className="appointment-title">
            Book An <strong>Appointment</strong>
          </h2>

          <div className="form-card">
            <form className="appointment-form" onSubmit={handleAppointment}>
              {/* First Name */}
              <div className="input-group">
                <label>First Name <sup>*</sup></label>
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              {/* Last Name */}
              <div className="input-group">
                <label>Last Name <sup>*</sup></label>
                <input
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              {/* Email */}
              <div className="input-group">
                <label>Email <sup>*</sup></label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Phone */}
              <div className="input-group">
                <label>Phone Number <sup>*</sup></label>
                <input
                  type="text"
                  required
                  value={Phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              {/* DOB */}
              <div className="input-group">
                <label>Date of Birth <sup>*</sup></label>
                <input
                  type="date"
                  required
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>

              {/* Gender */}
              <div className="input-group">
                <label>Gender <sup>*</sup></label>
                <select
                  required
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              {/* Appointment Date */}
              <div className="input-group">
                <label>Appointment Date <sup>*</sup></label>
                <input
                  type="date"
                  required
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                />
              </div>

              {/* Department */}
              <div className="input-group">
                <label>Department <sup>*</sup></label>
                <select
                  required
                  value={department}
                  onChange={(e) => {
                    setDepartment(e.target.value);
                  }}
                >
                  {departmentsArray.map((dept, i) => (
                    <option key={i} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              {/* Select Doctor */}
              <div className="input-group">
                <label>Select Doctor <sup>*</sup></label>
                <select
                  required
                  value={doctor}
                  onChange={(e) => {
                    setDoctor(e.target.value);
                  }}
                >
                  {doctorsArray.map((doc, i) => (
                    <option key={i} value={doc}>
                      {doc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Address */}
              <div className="input-group address-group">
                <label>Address <sup>*</sup></label>
                <textarea
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></textarea>
              </div>

              {/* Submit */}
              <div className="submit-group">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Testimonial />
      <Footer />
    </div>
  );
};

export default Appointment;
