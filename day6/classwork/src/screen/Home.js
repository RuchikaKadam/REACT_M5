import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SliderWithInfo from "../components/SliderWithInfo";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import MyChart from "../components/MyChart";

const Home = () => {
  const options = ["5 Years", "10 Years", "15 Years", "20 Years", "25 Years"];
  const [loanTerm, setLoanTerm] = useState(5);
  const [homeValue, setHomeValue] = useState(2800);
  const [downPayment, setDownPayment] = useState(1000);
  const [loanAmount, setLoanAmount] = useState(1800);
  const [interestRate, setInterestRate] = useState(8);
  const [chartData, setChartData] = useState([loanAmount, 0]);

  const updateChartData = () => {
    const totalLoan = loanTerm * 12;
    const actualLoanAmount = homeValue - downPayment;
    const interestPerMonth = interestRate / 100 / 12;

    const monthlyPayment =
      (actualLoanAmount * interestPerMonth * (1 + interestPerMonth) ** totalLoan) /
      ((1 + interestPerMonth) ** totalLoan - 1);

    const totalInterestGenerated = monthlyPayment * totalLoan - actualLoanAmount;

    setChartData([actualLoanAmount, totalInterestGenerated]);
  };

  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%", padding: "0 10px" }}>
          <SliderWithInfo title={"Home Value"} symbol={"$"} val={homeValue} min={1000} max={10000} onChange={(value) => { setHomeValue(value); updateChartData(); }} />
          <SliderWithInfo title={"Down Payment"} symbol={"$"} val={downPayment} min={0} max={5000} onChange={(value) => { setDownPayment(value); updateChartData(); }} />
          <SliderWithInfo title={"Loan Amount"} symbol={"$"} val={loanAmount} min={0} max={5000} onChange={(value) => { setLoanAmount(value); updateChartData(); }} />
          <SliderWithInfo title={"Interest Rate"} symbol={"%"} val={interestRate} min={2} max={18} onChange={(value) => { setInterestRate(value); updateChartData(); }} />
          <div>
            <Dropdown
              options={options}
              onChange={(value) => { setLoanTerm(parseInt(value.value)); updateChartData(); }}
              value={loanTerm.toString()}
              placeholder="5 Years"
            />
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <MyChart chartData={chartData} />
        </div>
      </div>
    </>
  );
};

export default Home;
