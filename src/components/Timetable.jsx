import React from "react";
import Line1 from "../images/line1.png";
import timetable from "../images/tt.png";
import TimeTablebg from "../images/timetablebg.png";
import "../css/TimeTable.css";

const Timetable = () => {
  return (
    <div className="timetable-container">
      <div className="timetable-content">
        <div className="timetable-header">
          <h1 className="heading caladea">Book Appointment</h1>
          <span className="subheading Arvo">According To Time Table</span>
        </div>

        <div className="timetable-boxes">
          <div className="working-hours-box">
            <div className="box-header">
              <h1 className="caladea">Working Hours</h1>
              <p className="Arvo">An Appointment is advance to minimize waiting time</p>
            </div>

            {[
              { day: "Monday - Tuesday", time: "9am - 6 pm" },
              { day: "Wednesday - Thursday", time: "8am - 5pm" },
              { day: "Friday", time: "7am - 10pm" },
              { day: "Saturday", time: "10am - 7pm" },
              { day: "Sunday", time: "8am - 11pm" },
            ].map((slot, index) => (
              <div className="day-row" key={index}>
                <div className="day-time">
                  <span className="Arvo">{slot.day}</span>
                  <span className="Arvo">{slot.time}</span>
                </div>
                {index < 4 && <img className="divider" src={Line1} alt="line" />}
              </div>
            ))}
          </div>

          <div className="image-wrapper">
            <img className="schedule-image" src={timetable} alt="timetable" />
          </div>
        </div>
      </div>

      <img className="background-img" src={TimeTablebg} alt="background" />
    </div>
  );
};

export default Timetable;
