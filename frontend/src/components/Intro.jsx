import React from "react";
import "../CSS/Intro.css";

const Intro = () => {
  return (
    <div className="intro-section">
      <p className="intro-text">
        <strong>Welcome to HeartScope</strong> — your intelligent heart health
        companion.
        <br />
        <br />
        Cardiovascular diseases are one of the leading causes of health issues
        worldwide. Early detection and risk assessment can make a significant
        difference in prevention and treatment.
        <br />
        <br />
        <strong>HeartScope</strong> leverages machine learning technology to
        analyze key clinical parameters — such as age, blood pressure,
        cholesterol levels, and ECG results — to assess the likelihood of heart
        disease in real-time.
        <br />
        <br />
        Whether you're a healthcare provider, student, or simply someone curious
        about predictive health tools, this app allows you to explore how AI can
        assist in medical screening.
        <br />
        <em>
          Try it out by entering your health metrics below — and take the first
          step towards understanding your heart better.
        </em>
      </p>
    </div>
  );
};

export default Intro;
