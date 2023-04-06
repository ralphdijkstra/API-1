import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo";
import { Bars4Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <nav class="w-full flex flex-row justify-between md:grid md:grid-cols-3 place-content-stretch h-[3rem]">
      <a href="/home" class="">
        <Logo/>
      </a>
      <div class="hidden text-xl items-center md:flex justify-center gap-[3rem] transition-all duration-300 ease-in-out">
          <Link to="/movies">Movies</Link>
          <Link to="/series">Series</Link>
      </div>
      <div class="hidden justify-end md:flex flex-row py-1">
        <div class="relative w-1/2 group/search">
          <input type="search" class="border-0 rounded-xl w-full bg-gray-500/70 backdrop-blur-[2px] px-4 py-2 placeholder:text-slate-300 text-slate-200 focus:ring-0 focus:border-none text-base" placeholder="Search..."/>
          <div class="inset-y-0 items-center absolute top-0 right-0 pr-3 pointer-events-none flex">  
            <MagnifyingGlassIcon/>    
          </div>
        </div>
      </div>
      <div class="flex md:hidden bg-gray-500/70 backdrop-blur-[2px] px-4 py-2 max-w-fit rounded-xl">
        <button class="px-4 hover:bg-gray-400/70 backdrop-blur-[2px] rounded-lg">
          <MagnifyingGlassIcon/>
        </button>
        <button class="px-4 hover:bg-gray-400/70 backdrop-blur-[2px] rounded-lg">
          <Bars4Icon/>
        </button>
      </div>
    </nav>
  );
}
