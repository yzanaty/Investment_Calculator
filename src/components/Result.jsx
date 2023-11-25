import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].annualInvestment -
    resultsData[0].interest;
  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((data) => {
          const totalInterest =
            data.valueEndOfYear -
            initialInvestment -
            data.annualInvestment * data.year;

          const totalInvested = data.valueEndOfYear - totalInterest;

          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
