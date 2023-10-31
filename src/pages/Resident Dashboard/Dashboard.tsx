import Sidebar from "@/components/ui/Sidebar";
import Header from "@/components/ui/Header";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Chart as Chartjs,
  LineElement,
  CategoryScale, // x axis
  LinearScale, //y axis
  PointElement,
} from "chart.js/auto";

import { Line } from "react-chartjs-2";
Chartjs.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Dashboard() {
  const data = {
    labels: ["5min", "10min", "15min", "20min"],
    datasets: [
      {
        label: "Gas Level",
        data: [3, 20, 5, 9], // Numeric values for "high" and "low"
        backgroundColor: ["navy", "navy", "navy", "navy"],
        fill: false,
        borderColor: "navy",
        tension: 0.4,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          callback: (value: string | number) => value, // Explicitly define parameter type
        },
      },
    },
  };

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="w-4/5 h-screen overflow-y-auto">
        <Header title="Dashboard"></Header>
        <main className="p-8 text-left">
          <div>
            <h3 className="font-bold text-xl">Sensor Reading</h3>
            <p className="text-slate-400 mt-1">Updated every 2 seconds</p>
          </div>

          <div className="flex flex-col md:flex-row md:justify-center gap-5 mt-5">
            <Card className="w-full lg:w-1/3 bg-emerald-500 text-white h-52">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Gas Level</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex flex-col justify-center h-1/2">
                <h2 className="font-extrabold text-3xl">HIGH</h2>
              </CardContent>
            </Card>
            <Card className="w-full lg:w-1/3 bg-emerald-500 text-white h-52">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Flame Level</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex flex-col justify-center h-1/2">
                <h2 className="font-extrabold text-3xl">LOW</h2>
              </CardContent>
            </Card>
          </div>
          <div className="w-full md:w-2/3 h-96 mx-auto mt-7">
            <div className="h-full">
              <p> Gas level Histogram</p>
              <Line data={data} options={options} />
            </div>
            <div className="h-full mt-10">
              <p> Fire level Histogram</p>
              <Line data={data} options={options} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
