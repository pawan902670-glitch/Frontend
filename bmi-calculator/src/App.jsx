import { useState } from "react";
import "./App.css";

function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState("");

  function calculateBMI() {
    if (!height || !weight) {
      alert("Please enter height and weight");
      return;
    }

    const result = (weight / (height * height)) * 10000;
    setBMI(result.toFixed(2));
  }

  return (
    <div className="container">
      <h1>BMI Calculator</h1>

      <input
        className="input"
        type="number"
        placeholder="Enter height in cm"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <input
        className="input"
        type="number"
        placeholder="Enter weight in kg"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <button className="btn" onClick={calculateBMI}>
        Calculate BMI
      </button>

      {bmi && (
        <div className="result">
          <h2>Your BMI : {bmi}</h2>

          {bmi <= 18.5 ? (
            <h3 className="under">❎ Underweight</h3>
          ) : bmi < 25 ? (
            <h3 className="normal">✅ Normal Weight</h3>
          ) : bmi < 30 ? (
            <h3 className="over">❎ Overweight</h3>
          ) : (
            <h3 className="obese">👎 Obese</h3>
          )}
        </div>
      )}
    </div>
  );
}

export default BMI;