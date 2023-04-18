import React from "react";

export default function TabButton({ value, children, tab, setTab }) {
  return (
    <li className="flex-1" key={value}>
      <a
        href="#"
        onClick={() => {
          setTab(value);
        }}
        className={`relative flex items-center justify-center gap-2 px-1 py-3
${
  tab === value
    ? "text-white after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-blue-500"
    : "text-gray-500 hover:text-white"
} `}
      >
        {children}
      </a>
    </li>
  );
}
