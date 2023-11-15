import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getToken } from "@/utils/getToken";
import { getSession } from "@/utils/getSession";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

interface Device {
  deviceName: string;
  macAddress: string;
}

interface DeviceListProps {
  devices: Device[];
}

const DeviceCard = (props: { name: string; mac: string }) => {
  return (
    <Card className="flex justify-between items-center h-24 px-8 mb-3 shadow-md">
      <div className="flex flex-col">
        <CardTitle className="text-left">{props.name}</CardTitle>
        <CardDescription className="text-left mt-2">
          Mac Address: {props.mac}
        </CardDescription>
      </div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="w-1/5 bg-[#00274F] hover:bg-[#003E7D]">
            Unlink
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will unlink your device from
              your account.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
};

const Devices: React.FC = () => {
  const [devices, setDevices] = React.useState<Device[]>([]);
  const [deviceName, setDeviceName] = useState("");
  const [macAddress, setMacAddress] = useState("");

  React.useEffect(() => {
    const fetchDevices = async () => {
      try {
        const token = getToken();
        const sessionData = await getSession(token);
        console.log(sessionData);
        const req = await fetch("http://localhost:3000/api/user/device/get", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userId: sessionData?.userId }),
        });

        const res = await req.json();
        setDevices(res.devices); // Update devices state
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDevices();
  }, []);

  async function addDevice() {
    console.log(deviceName);
    console.log(macAddress);

    const token = getToken();
    const sessionData = await getSession(token);

    const data = {
      deviceName,
      macAddress,
      userId: sessionData?.userId,
    };

    try {
      const req = await fetch(
        "http://localhost:3000/api/user/device/createDevice",
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
      console.log(res);
      toast.success("Device added sucessfully!", {
        position: "bottom-right",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="w-4/5 h-screen overflow-y-auto">
        <Header title="Devices" />
        <main>
          <div className="w-full flex justify-end px-10 my-5">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-[#00274F] hover:bg-[#003E7D]">
                  Add Device
                </Button>
              </DialogTrigger>
              <DialogContent className="">
                <DialogHeader>
                  <DialogTitle>Add Device</DialogTitle>
                  <DialogDescription>
                    Link a device by entering a Device name and its Mac Address.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="deviceName" className="text-right">
                      Device Name
                    </Label>
                    <Input
                      id="deviceName"
                      value={deviceName}
                      onChange={(e) => setDeviceName(e.target.value)}
                      placeholder="living room"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="macAddress" className="text-right">
                      Mac Address
                    </Label>
                    <Input
                      id="macAddress"
                      value={macAddress}
                      onChange={(e) => setMacAddress(e.target.value)}
                      placeholder="00:00:5e:00:53:ad"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" onClick={addDevice}>
                    Save changes
                  </Button>
                </DialogFooter>
              </DialogContent>
              <ToastContainer />
            </Dialog>
          </div>
          <div className="w-3/4 m-auto">
            {/* <DeviceCard name="Living Room" mac="00:00:5e:00:53:ad" /> */}

            {devices.map((device: Device, index: number) => (
              <DeviceCard
                key={index}
                name={device.deviceName}
                mac={device.macAddress}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Devices;
