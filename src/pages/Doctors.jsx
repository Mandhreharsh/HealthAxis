import React from "react";
import DoctorsTeam from "../components/DoctorsTeam.jsx";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
const Appointment = () => {

    return (
        <div>
            <div>
            <DoctorsTeam></DoctorsTeam>
        </div>

        <div>
                <Testimonial></Testimonial>
            </div>

        <div>
            <Footer></Footer>
        </div>
        </div>
        
    )
}

export default Appointment;