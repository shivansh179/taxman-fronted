// Home.js
import React from "react";
import Navbar from "../Components/Navbar";
import DataBoxes from "../Components/DataBoxes";
import Input from "../Components/Input";
import PieCharts from "../Components/PieCharts";
import AddData from "../Components/Display";

const Home = () => {
  const chartData = {
    labels: ["Data1", "Data2", "Data3", "Data4"],
    values: [30, 20, 50, 90],
    colors: ["#FF6384", "#36A2EB", "#FFCE56", "#FFCE80"],
  };
  return (
    <div className="home">
      <div className="first">
        <div className="left">
          <Navbar />
          <div className="upper">
            <DataBoxes />
            <Input />
          </div>
        </div>
        <div className="right">
          <PieCharts data={chartData} />
        </div>
      </div>
      <div className="second">
        <AddData />
      </div>
    </div>
  );
};

export default Home;
