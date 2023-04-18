import React, { useContext, useState } from "react";
import { SelectedMovieContext } from "../../Contexts/SelectedMovieContext";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { TabButton, Trailers, Details } from "../Dashboard"

export default function Properties() {
  const { selectedMovie, setSelectedMovie } = useContext(SelectedMovieContext);
  const [tab, setTab] = useState(0);

  const selectedTab = () => {
    switch (tab) {
      case 0:
        return <Trailers tab={tab} />;
      case 1:
        return <Details tab={tab} />;
      case 2:
        return "2";
      case 3:
        return "3";
      default:
        return <Trailers />;
    }
  };

  return (
    <>
      <div className="sticky top-0 bg-neutral-900">
        <div className="flex items-center justify-between p-3 text-xl">
          <div>{selectedMovie.title}</div>
          <button
            className="rounded-full p-1 hover:bg-neutral-800 transition-all duration-100"
            onClick={() => {
              setSelectedMovie(null);
            }}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="border-b border-b-gray-200">
          <ul className="-mb-px flex items-center gap-4 text-sm font-medium">
            <TabButton tab={tab} setTab={setTab} value={0}>
              Trailers
            </TabButton>
            <TabButton tab={tab} setTab={setTab} value={1}>
              Details
            </TabButton>
            <TabButton tab={tab} setTab={setTab} value={2}>
              People
            </TabButton>
            <TabButton tab={tab} setTab={setTab} value={3}>
              Manage
            </TabButton>
          </ul>
        </div>
      </div>
      <div>{selectedTab()}</div>
    </>
  );
}
