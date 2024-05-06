import { useState } from "react";

// Messages Component
const Messages = ({ count }) => {
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  return (
    <div>
      {messages.slice(0, count).map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
};

function MultiStep() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {[1, 2, 3].map((num) => (
              <div key={num} className={num == step ? "active" : ""}>
                {num}
              </div>
            ))}
          </div>
          <Messages count={step} />
          <div className="buttons">
            <button
              className="btn-primary"
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className="btn-primary"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default MultiStep;
