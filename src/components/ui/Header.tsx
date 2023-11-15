import { Button } from "./button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { FiUser, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getToken } from "@/utils/getToken";
import { getSession } from "@/utils/getSession";
import { useState, useEffect } from "react";

function logout() {
  localStorage.removeItem("jwt");
  window.location.reload();
  console.log("user logged out");
}

export default function Header(props: { title: string }) {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const token = getToken();
        const sessionData = await getSession(token);
        const fullname = `${sessionData?.firstName} ${sessionData?.lastName}`;
        setUsername(fullname);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSession();
  }, []);

  function getInitials(fullName: string) {
    const names = fullName.split(" ");
    const initials = names.map((name: string) => name.charAt(0));
    return initials.join("").toUpperCase();
  }

  const initials = getInitials(username);

  return (
    <div className="sticky top-0 z-10 bg-transparent shadow-sm backdrop-filter backdrop-blur-sm">
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
              <Avatar>
                <AvatarFallback className="bg-slate-400">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <p className="text-lg font-semibold hidden md:block ml-2">
                {" "}
                {username}
              </p>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col gap-y-2 w-40">
            <Button variant="outline">
              <Link to="/profile" className="flex gap-x-2 items-center">
                <FiUser></FiUser>Profile
              </Link>
            </Button>
            <Button
              variant="destructive"
              className="flex gap-x-2 items-center"
              onClick={logout}
            >
              <FiLogOut></FiLogOut>Log Out
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
