import React, { useEffect, useState } from "react";
import ServicesSection from "../components/ServicesSection";
import data from "../data.json"
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";

const Services = () => {

    const[cares, setCares] = useState([]);

    useEffect(() => {
        setCares(data.service)
    }, [])

    return (
        <div>
            <div>
                <ServicesSection cares={cares} ></ServicesSection>
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

export default Services;
