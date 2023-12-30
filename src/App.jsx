import { useState } from "react";

const stepItem = ["Dream", "Believe", "Archive"]

function App() {
  const [step, setStep] = useState(1);
  const [isopen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < 3) {
      setStep((step)=>step + 1);
    } else {
      alert("max page");
    }
  }

  function handlePrev() {
    if (step > 1) {
      setStep((step)=>step - 1);
    } else {
      alert("min page");
    }
  }

  return (
    <>
    <button className="close" onClick={()=>{setIsOpen((isopen)=>!isopen)}}>&times;</button>
    {isopen && 
      <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>
        <p className="message">
          Step {step}: {stepItem[step - 1]}
        </p>
        <div className="buttons">
          <button className="btn" onClick={handlePrev}>
            Prev
          </button>
          <button className="btn" onClick={handleNext}>
            Next
          </button>
        </div>
      </div> }
    </>
  );
}

export default App;
