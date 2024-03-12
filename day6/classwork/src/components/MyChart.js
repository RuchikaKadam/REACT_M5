import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const MyChart = ({ chartData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = document.getElementById("graph");
    if (!ctx) return; // Return early if the element is not available yet

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Amount", "Interest"],
        datasets: [
          {
            label: "PAYMENT",
            data: chartData,
            backgroundColor: ["#97f5d5", "#85adea"],
            borderColor: ["#97f5d5", "#85adea"],
            borderWidth: 1,
          },
        ],
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [chartData]);

  return <canvas id="graph" width="400" height="400" />;
};

export default MyChart;
