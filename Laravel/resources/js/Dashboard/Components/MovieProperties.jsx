import { HeartIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Details from "./Details";
import Trailers from "./Trailers";

export default function MovieProperties({ deselectMovie, selectedMovie }) {
    const [openTab, setOpenTab] = useState(0);
    const tabs = [
        {
            name: "Trailers",
            value: 0,
        },
        {
            name: "Details",
            value: 1,
        },
        {
            name: "Cast & Crew",
            value: 2,
        },
        {
            name: "Genres",
            value: 3,
        },
    ];

    return (
        <div className="w-full h-screen overflow-auto scrollbar-hide">
            <div className="sticky top-0 bg-neutral-900">
                <div className="flex items-center justify-between w-full p-5">
                    <div className="flex items-center w-full gap-5">
                        <h1 className="text-2xl flex-1">
                            {selectedMovie.title}
                        </h1>
                        <button
                            onClick={() => {
                                deselectMovie();
                            }}
                        >
                            <XMarkIcon className="w-7 h-7" />
                        </button>
                    </div>
                </div>
                <div className="border-b border-b-gray-200">
                    <ul className="-mb-px flex items-center gap-4 text-sm font-medium">
                        {tabs.map((tab) => (
                            <li className="flex-1" key={tab.value}>
                                <a
                                    href="#"
                                    onClick={() => {
                                        setOpenTab(tab.value);
                                    }}
                                    className={`relative flex items-center justify-center gap-2 px-1 py-3
                        ${
                            openTab === tab.value
                                ? "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-blue-500 text-white"
                                : "text-gray-500 hover:text-white"
                        } `}
                                >
                                    {tab.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={`${openTab === 0 ? "block" : "hidden"}`}>
                <Trailers movie={selectedMovie} />
            </div>
            <div className={openTab === 1 ? "block" : "hidden"}>
                <Details movie={selectedMovie} />
            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>
                <h2>Cast & Crew</h2>
            </div>
            <div className={openTab === 3 ? "block" : "hidden"}>
                <h2>Genres</h2>
            </div>
        </div>
    );
}
