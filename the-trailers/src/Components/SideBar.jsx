import React from "react";
import Logo from "../Assets/Logo";
import SideBarLink from "./SideBarLink";
import {
  FilmIcon,
  HomeIcon,
  TvIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export default function SideBar() {
  return (
    <div className="w-full h-screen sticky top-0 bg-neutral-900 flex flex-col justify-start text-white text-center">
      <div className="border-b-2 p-3 border-neutral-800 flex justify-center">
        <Logo />
      </div>
      <SideBarLink href={"/dashboard"}>
        <HomeIcon className="w-6 h-6" /> Home
      </SideBarLink>
      <SideBarLink href={"/dashboard/movies"}>
        <FilmIcon className="w-6 h-6" />
        Movies
      </SideBarLink>
      <SideBarLink href={"/tv"}>
        <TvIcon className="w-6 h-6" />
        TV shows
      </SideBarLink>
      <SideBarLink href={"/people"}>
        <UserIcon className="w-6 h-6" />
        People
      </SideBarLink>
      <div className="mt-auto border-t-2 border-neutral-800">
        <SideBarLink href={"/user"}>
          <UserCircleIcon className="w-6 h-6" />
          Your account
        </SideBarLink>
      </div>
    </div>
  );
}
