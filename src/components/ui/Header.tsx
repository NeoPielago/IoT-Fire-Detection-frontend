import { Button } from "./button";
import profileImg from "/public/logo.ico";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FiUser, FiLogOut } from "react-icons/fi";

export default function Header(props: { title: string }) {
  return (
    <div className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="wrapper flex justify-between p-4 px-8 items-center">
        <h1 className="text-sm font-bold md:text-2xl lg:text-3xl">
          {props.title}
        </h1>
        {/* <div className="flex gap-x-2 items-center rounded-lg hover:text-white hover:bg-[#001F3F] p-2 px-4 cursor-pointer">
          <img src={profileImg} alt="profile image" className="object-cover" />
          <p className="text-lg font-semibold hidden md:flex md:gap-x-1">
            Shawn <span> Mendes</span>
          </p>
        </div> */}

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost">
              {" "}
              <img
                src={profileImg}
                alt="profile image"
                className="object-cover"
              />
              <p className="text-lg font-semibold hidden md:block">
                {" "}
                Shawn Mendes
              </p>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col gap-y-2 w-40">
            <Button variant="outline">
              <FiUser></FiUser>Profile
            </Button>
            <Button variant="destructive">
              <FiLogOut></FiLogOut>Log Out
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
