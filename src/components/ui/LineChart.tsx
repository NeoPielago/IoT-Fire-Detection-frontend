import { Line } from "react-chartjs-2";
import {
  Chart as Chartjs,
  LineElement,
  CategoryScale, // x axis
  LinearScale, //y axis
  PointElement,
} from "chart.js/auto";

Chartjs.register(LineElement, CategoryScale, LinearScale, PointElement);

// const userData = [
//   {
//     gas: "low",
//   },
//   {
//     gas: "low",
//   },
//   {
//     gas: "high",
//   },
//   {
//     gas: "low",
//   },
//   {
//     gas: "high",
//   },
//   {
//     gas: "low",
//   },
//   {
//     gas: "low",
//   },
//   {
//     gas: "low",
//   },
//   {
//     gas: "high",
//   },
//   {
//     gas: "low",
//   },
//   {
//     gas: "high",
//   },
//   {
//     gas: "high",
//   },
//   {
//     gas: "high",
//   },
// ];

export default function LineChart() {
  const data = {
    labels: ["5min", "10min", "15min", "20min"],
    datasets: [
      {
        labels: "Gas Level",
        data: ["high", "low", "low", "high", "high"],
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
  };

  return <Line data={data} options={options} />;
}
