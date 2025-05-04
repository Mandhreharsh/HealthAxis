import React from "react";
import "../css/Question.css";

const Question = ({ frequent, onClick, isOpen }) => {
    return (
        <div className="question-container">
            <div onClick={onClick} className="question-header">
                <div className="question-text Arvo">{frequent.question}</div>
                <span className={`toggle-icon ${isOpen ? "rotate" : ""}`}>
                    {isOpen ? "-" : "+"}
                </span>
            </div>
            <div className={`question-answer ${isOpen ? "open" : ""} Arvo`}>
                {frequent.answer}
            </div>
        </div>
    );
};

export default Question;
