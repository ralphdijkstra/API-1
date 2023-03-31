import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo";

export default function SideBar() {
    return (
        <div className="w-full h-screen sticky top-0 bg-neutral-900 flex flex-col justify-start text-white text-center">
            <div className="border-b-2 p-3 xl:p-5 border-neutral-800 flex justify-center">
                <Logo />
            </div>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
        </div>
    );
};
