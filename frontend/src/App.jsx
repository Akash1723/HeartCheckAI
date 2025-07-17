import { useState,useRef, useEffect } from "react";
import "./CSS/index.css";
import HeartForm from "./components/HeartForm";
import Footer from "./components/Footer_comp";
import Header from "./components/Header_comp";
import Intro from "./components/Intro";
import Output from "./components/Output";

function App() {
  const [output, setOutput] = useState(null);
  const outputRef = useRef(null);

  const handle_HeartForm_submit = async (formData) => {
    console.log(formData);
    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);
      if (response.ok) {
        let message = result.prediction === 1 ? "Has Heart Disease" : "No Heart Disease";
        setOutput(message);
      } else {
        let message="Prediction failed: " + result.error;
        setOutput(message);
      }
    } catch (err) {
      console.log(err);
      alert("Server error");
    }
  };

  useEffect(() => {
    if (output && outputRef.current) {
      outputRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [output]);

  return (
    <div className="flex justify-center items-center h-screen">
      <Header />
      <Intro />
      <HeartForm onSubmit={handle_HeartForm_submit} />
      {output!==null && <Output msg={output} ref={outputRef}/>}
      <Footer />
    </div>
  );
}

export default App;
