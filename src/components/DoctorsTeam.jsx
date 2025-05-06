import React from "react";
import Doctor1 from "../images/doctor1.png";
import Doctor2 from "../images/doctor2 copy.png";
import Doctor3 from "../images/doctor3.png";
import Doctor4 from "../images/doctor4.png";
import "../css/DoctorsTeam.css";

const doctorData = [
  { image: Doctor1, name: "Emily Carter", title: "Pediatrician" },
  { image: Doctor2, name: "Daniel Smith", title: "Cardiologist" },
  { image: Doctor3, name: "Sophia Lee", title: "Dermatologist" },
  { image: Doctor4, name: "James Brown", title: "Neurologist" },
  { image: Doctor1, name: "Olivia Taylor", title: "Gynecologist" },
  { image: Doctor2, name: "William Davis", title: "Orthopedic" },
];

const DoctorsTeam = () => {
  return (
    <div className="doctors-section">
      <h2 className="doctors-title">
        Meet our <span className="text-[34px] caladea font-bold">Specialist</span>
      </h2>
      <div className="doctors-grid">
        {doctorData.map((doctor, index) => (
          <div className="doctor-card" key={index}>
            <div className="doctor-image-wrapper">
              <img src={doctor.image} alt={doctor.name} />
            </div>
            <div className="doctor-info">
              <span className="doctor-name"><strong>{doctor.name}</strong></span>
              <span className="doctor-title">{doctor.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsTeam;
