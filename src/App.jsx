import UserInput from "./components/UserInput";
import Output from "./components/Output";
import { useState } from "react";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevInput => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      }
    });
  }

  const inputIsValid = userInput.duration > 0

  return (
    <>
      <UserInput id="user-input" handleChange={handleChange} userInput={userInput} />
      {!inputIsValid && <p className="center">Please enter a valid duration (greater than 0).</p> }
      {inputIsValid && <Output values={userInput} /> }
    </>
  );
}

export default App
