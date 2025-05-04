import React, { useState } from "react";
import Question from "./Question";
import Que from "../images/que.png";
import "../css/Frequent.css";

const Frequent = ({ questions }) => {
    const [showSelected, setShowSelected] = useState(null);

    const showAnswer = (index) => {
        setShowSelected(index === showSelected ? null : index);
    };

    return (
        <div className="frequent-container">
            <div className="frequent-wrapper">
                <div className="frequent-title">
                    <h1 className="Arvo">Frequently Asked <span className="caladea">Questions</span></h1>
                </div>

                <div className="frequent-content">
                    <div className="frequent-inner">
                        <div className="frequent-image">
                            <img src={Que} alt="FAQ Illustration" />
                        </div>

                        <div className="frequent-questions">
                            {
                                questions.map((question, index) => (
                                    <Question
                                        key={question.id}
                                        frequent={question}
                                        onClick={() => showAnswer(index)}
                                        isOpen={showSelected === index}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frequent;
