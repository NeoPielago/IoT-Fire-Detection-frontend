import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="w-4/5 h-screen overflow-y-auto">
        <Header title="Alarm History" />

        <main className="m-auto w-4/5 mt-6">
          <AlarmCard date="April 02, 2002" />
          <AlarmCard date="April 02, 2002" />
          <AlarmCard date="April 02, 2002" />
          <AlarmCard date="April 02, 2002" />
          <AlarmCard date="April 02, 2002" />
          <AlarmCard date="April 02, 2002" />
          <AlarmCard date="April 02, 2002" />
          <AlarmCard date="April 02, 2002" />
          <AlarmCard date="April 02, 2002" />
          <AlarmCard date="April 02, 2002" />
          <AlarmCard date="April 02, 2002" />
          <AlarmCard date="April 02, 2002" />
          <AlarmCard date="April 02, 2002" />
          <AlarmCard date="April 02, 2002" />
        </main>
      </div>
    </div>
  );
}
