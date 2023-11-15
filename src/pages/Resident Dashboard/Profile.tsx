import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FiEdit } from "react-icons/fi";
import { Button } from "@/components/ui/button";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Profile() {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="w-4/5 h-screen overflow-y-auto">
        <Header title="Profile" />
        <main className="p-8">
          <Card className="text-left flex items-center p-5 shadow-md">
            {/* <Avatar>
              <AvatarFallback className="bg-slate-400">SM</AvatarFallback>
            </Avatar> */}
            <div className="bg-slate-400 rounded-full w-28 h-28 flex items-center justify-center font-bold text-3xl">
              SM
            </div>
            <CardHeader>
              <CardTitle>Shawn Mendes</CardTitle>
              <CardDescription>Resident</CardDescription>
              <CardDescription>Leeds, United Kindom</CardDescription>
            </CardHeader>
          </Card>

          <Card className="my-5 p-5 shadow-md">
            <CardTitle className="text-left flex justify-between">
              {" "}
              Personal Information
              <Sheet>
                <SheetTrigger>
                  <Button variant="ghost">
                    <FiEdit></FiEdit>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit Personal Information</SheetTitle>
                    <SheetDescription>
                      Make changes into your personal information here. CLick
                      save when you're done.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Shawn"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="lastName" className="text-right">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Mendes"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right">
                        Email
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        placeholder="shawnmendes@gmail.com"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="contactNo" className="text-right">
                        Contact No
                      </Label>
                      <Input
                        type="text"
                        id="contactNo"
                        placeholder="09XXXXXXXXX"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button type="submit">Save changes</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </CardTitle>
            <CardContent className="mt-5">
              <div className="w-11/12 lg:w-1/2">
                <div className="flex justify-between">
                  <p className="font-semibold opacity-50">First Name</p>
                  <p className="font-semibold opacity-50">Last Name</p>
                </div>

                <div className="flex justify-between mt-2 mb-7">
                  <p className="font-semibold">Shawn</p>
                  <p className="font-semibold">Mendes</p>
                </div>

                <div className="flex justify-between">
                  <p className="font-semibold opacity-50">Email Address</p>
                  <p className="font-semibold opacity-50">Contact no</p>
                </div>

                <div className="flex justify-between mt-2">
                  <p className="font-semibold">Shawnmendes@gmail.com</p>
                  <p className="font-semibold">09284331623</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}

//create a util that will take care of the session and will return the values of the a specific user including its auth level and all of tis critical information, you can just import this in to every project that you have so you don't have write the sessino fetch over and over again.
