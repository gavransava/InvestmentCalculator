import { useState } from "react";

export default function UserInput({ onSubmit }) {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedGain: 0,
    duration: 0,
  });

  const handleValueChange = (event) => {
    const input = event.target.elements.userInput.value;

    setUserInput((prevValues) => ({
      ...prevValues,
      initialInvestment: input.initialInvestment,
      annualInvestment: input.annualInvestment,
      expectedGain: input.expectedGain,
      duration: input.duration,
    }));

    onSubmit(
      input.initialInvestment,
      input.annualInvestment,
      input.expectedGain,
      input.duration
    );
  };

  return (
    <form id="user-input">
      <div className="input-group">
        <div className="input-pair">
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            id="initial-investment"
            onChange={handleValueChange}
            type="number"
            placeholder="0"
            required
          />
        </div>
        <div className="input-pair">
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            id="annual-investment"
            onChange={handleValueChange}
            type="number"
            placeholder="0"
            required
          />
        </div>
      </div>

      <div className="input-group">
        <div className="input-pair">
          <label htmlFor="expected-gain">Expected Return (%)</label>
          <input
            id="expected-gain"
            onChange={handleValueChange}
            type="number"
            placeholder="0"
            required
          />
        </div>
        <div className="input-pair">
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            id="duration"
            onChange={handleValueChange}
            type="number"
            placeholder="0"
            required
          />
        </div>
      </div>
    </form>
  );
}
