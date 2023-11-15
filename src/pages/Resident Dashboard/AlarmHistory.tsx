import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";
import { useEffect } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { getToken } from "@/utils/getToken";
import { getSession } from "@/utils/getSession";

const AlarmCard = (props: { date: string }) => {
  return (
    <Card className="p-2 md:p-5 w-full h-24 md:h-fit shadow-md m-5">
      <CardContent className="p-2 md:p-4 flex">
        <div className="h-full md:text-base md:border-r-2 p-2 pr-5 text-xs">
          {/*April 02, 2002*/ props.date}
        </div>
        <div className="flex flex-col px-5">
          <div className="text-xs md:text-lg font-bold">
            High Level of Gas/Smoke & Fire
          </div>
          <div className="hidden md:block md:text-sm font-normal text-left opacity-50">
            Gas Level: High <span>Fire Level: High</span>
          </div>
        </div>
      </CardContent>
      <div></div>
    </Card>
  );
};

//I think you need to create a separate component that will help you generate card components based on the data that you have.

export default function AlarmHistory() {
  const token = getToken();
  useEffect(() => {
    const fetchSession = async () => {
      try {
        const sessionData = await getSession(token);
        console.log(sessionData);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchAlarmHistory = async () => {
      const sessionData = await getSession(token);
      try {
        //getDevice to extract userID
        const request = await fetch(
          "http://localhost:3000/api/user/device/get",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ userId: sessionData?.userId }),
          }
        );

        const device = await request.json();
        console.log(device);

        //fetch for

        const data = {
          macAddress: device.devices[4].macAddress,
        };

        const req = await fetch(
          "http://localhost:3000/api/user/alarm/getHistory",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
          }
        );

        const res = await req.json();
        console.log("alarmHistory:", res.alarmHistory[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSession();
    fetchAlarmHistory();
  }, []);

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="w-4/5 h-screen overflow-y-auto">
        <Header title="Alarm History" />

        <main className="m-auto w-4/5 mt-6">
          <AlarmCard date="April 02, 2002" />
        </main>
      </div>
    </div>
  );
}
