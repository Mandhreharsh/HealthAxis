import React, { useEffect, useState } from "react";
import Section from "../components/Section";
import data from "../data.json"
import Header from "../components/Header";
import Label from "../components/label";
import Work from "../components/work";
import Timetable from "../components/Timetable";
import Message from "../components/Message"
import Testimonial from "../components/Testimonial";
import Frequent from "../components/Frequent";
import Footer from "../components/Footer";


const Home = () => {
    const [services, setServices] = useState([]);
    const [questions, setQuestions] = useState([]);

    useEffect(() =>{
       setServices(data.harsh)
       setQuestions(data.frequent)
    }, [])
    return (
        <div className="bg-white">
            <div>
                <Header></Header>
            </div>
            <div>
                <Label></Label>
            </div>
            <div>
                <Work></Work>
            </div>
            <div>
                <Section services={services}></Section>
            </div>

            <div>
                <Timetable></Timetable>
            </div>
            <div>
                <Message></Message>
            </div>

            <div>
                <Frequent questions={questions}></Frequent>
            </div>

            <div>
                <Testimonial></Testimonial>
            </div>

            <div>
                <Footer/>
            </div>
           
        </div>
    )
}

export default Home;