export default function UserInput({ handleChange, userInput }) {
  return (
    <form id="user-input">
      <div className="input-group">
        <div className="input-pair">
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            id="initial-investment"
            onChange={(event) => handleChange("initialInvestment", event.target.value)}
            type="number"
            value={userInput.initialInvestment}
            placeholder="0"
            required
          />
        </div>
        <div className="input-pair">
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            id="annual-investment"
            onChange={(event) => handleChange("annualInvestment", event.target.value)}
            type="number"
            value={userInput.annualInvestment}
            placeholder="0"
            required
          />
        </div>
      </div>

      <div className="input-group">
        <div className="input-pair">
          <label htmlFor="expected-return">Expected Return (%)</label>
          <input
            id="expected-return"
            onChange={(event) => handleChange("expectedReturn", event.target.value)}
            type="number"
            value={userInput.expectedReturn}
            placeholder="0"
            required
          />
        </div>
        <div className="input-pair">
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            id="duration"
            onChange={(event) => handleChange("duration", event.target.value)}
            type="number"
            value={userInput.duration}
            placeholder="0"
            required
          />
        </div>
      </div>
    </form>
  );
}
