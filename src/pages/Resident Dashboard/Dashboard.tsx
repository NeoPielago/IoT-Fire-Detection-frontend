import Sidebar from "@/components/ui/Sidebar";
import Header from "@/components/ui/Header";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="w-4/5">
        <Header></Header>
        <main className="p-8 text-left">
          <div>
            <h3 className="font-bold text-xl">Sensor Reading</h3>
            <p className="text-slate-400 mt-1">Updated every 2 seconds</p>
          </div>

          <div className="flex flex-col md:flex-row md:justify-center gap-5 h-[15rem] mt-5 ">
            <Card className="w-10/12 md:w-1/3 bg-emerald-500 text-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Gas Level</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex flex-col justify-center h-1/2">
                <h2 className="font-extrabold text-3xl">HIGH</h2>
              </CardContent>
            </Card>
            <Card className="w-10/12 md:w-1/3 bg-emerald-500 text-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Flame Level</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex flex-col justify-center h-1/2">
                <h2 className="font-extrabold text-3xl">LOW</h2>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
