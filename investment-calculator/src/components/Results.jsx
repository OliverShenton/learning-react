import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment =
    resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

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
        {resultsData.map((array) => {
          const totalInterest =
            array.valueEndOfYear - array.annualInvestment * array.year - initialInvestment;
          const totalInvested = array.valueEndOfYear - totalInterest;
          return (
            <tr key={array.year}>
              <td>{array.year}</td>
              <td>{formatter.format(array.valueEndOfYear)}</td>
              <td>{formatter.format(array.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
