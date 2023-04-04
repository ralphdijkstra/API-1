import React, { useContext, useEffect, useState } from "react";
import { SelectedMovieContext } from "../Contexts/SelectedMovieContext";
import axios from "axios";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import YoutubeFrame from "./YoutubeFrame";

export default function TrailerList({ tab }) {
  const [trailers, setTrailers] = useState([]);
  const { selectedMovie, setSelectedMovie } = useContext(SelectedMovieContext);

  useEffect(() => {
    const getTrailers = async () => {
      const response = await axios.get(
        `http://185.228.81.212:8081/api/movies/${selectedMovie.id}/trailers`
      );
      setTrailers(response.data);
    };
    getTrailers();
  }, [selectedMovie, tab]);

  const deleteTrailer = async (selectedTrailer) => {
    await axios.delete(
      `http://185.228.81.212:8081/api/trailers/${selectedTrailer.id}`
    );
    setTrailers(
      trailers.filter((trailer) => trailer.id !== selectedTrailer.id)
    );
  };

  return (
    <>
      {trailers.map((trailer) => (
        <div className="flex flex-col gap-3 m-3 p-3 rounded" key={trailer.id}>
          <div className="flex items-center justify-between">
            <p className="flex-1">{trailer.type}</p>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-neutral-400">{trailer.url}</p>
              <button
                onClick={() => {}}
                className="flex items-center rounded-sm bg-neutral-800 p-1 px-2 text-sm hover:bg-neutral-700"
              >
                <PencilIcon className="mr-2 h-4 w-4" />
                Edit
              </button>
              <button
                onClick={() => {
                  deleteTrailer(trailer);
                }}
                className="flex items-center rounded-sm bg-neutral-800 p-1 px-2 text-sm hover:bg-neutral-700"
              >
                <TrashIcon className="mr-2 h-4 w-4" />
                Delete
              </button>
            </div>
          </div>
          <YoutubeFrame trailer={trailer} />
        </div>
      ))}
    </>
  );
}
