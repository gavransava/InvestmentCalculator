import React from "react";
import { formatter } from "../util/investment";
import { calculateInvestmentResults } from "../util/investment";
import { transformInvestmentResults } from "../util/investment";

export default function Output({ values }) {

  const rawResults = calculateInvestmentResults(values);
  const transformedResults = transformInvestmentResults(rawResults, values.initialInvestment);

  if (!transformedResults || transformedResults.length === 0) {
    return <p className="center">No data available.</p>;
  }

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {transformedResults.map((row, index) => (
          <tr key={index}>
            <td>{row.year}</td>
            <td>{formatter.format(row.investmentValue)}</td>
            <td>{formatter.format(row.interestYear)}</td>
            <td>{formatter.format(row.totalInterest)}</td>
            <td>{formatter.format(row.investedCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
