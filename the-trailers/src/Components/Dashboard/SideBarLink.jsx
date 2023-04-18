import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function SideBarLink({ href, children }) {
  const location = useLocation();
  return (
    <Link
      className={`flex justify-center ${
        location.pathname == href ? "bg-blue-500 text-white" : "text-neutral-300"
      }`}
      to={href}
    >
      <div className="flex justify-left gap-5 py-2 w-full ml-10">{children}</div>
    </Link>
  );
}
