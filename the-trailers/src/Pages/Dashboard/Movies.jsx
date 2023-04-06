import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Panel from "../../Components/Panel";
import { SelectedMovieContext } from "../../Contexts/SelectedMovieContext";
import Properties from "../../Components/Properties";
import Genres from "../../Components/Genres";
import { FunnelIcon } from "@heroicons/react/24/solid";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get("http://185.228.81.212:8081/api/movies");
      setMovies(response.data);
    };
    getMovies();
  }, []);

  return (
    <DashboardLayout>
      <SelectedMovieContext.Provider
        value={{ selectedMovie, setSelectedMovie }}
      >
        <div
          className={`grid h-full ${
            selectedMovie != null
              ? "grid-cols-[60%_40%]"
              : "grid-cols-[100%_0%]"
          }`}
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <h1 className="pt-5 px-5 text-3xl text-white">Movies</h1>
            </div>
              <Genres />
            <div className="flex flex-wrap justify-center gap-2 text-white">
              {movies.map((movie) => (
                <Panel movie={movie} />
              ))}
            </div>
          </div>
          <div className="bg-neutral-900 text-white overflow-y-scroll h-screen scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-neutral-700">
            {selectedMovie != null ? <Properties /> : null}
          </div>
        </div>
      </SelectedMovieContext.Provider>
    </DashboardLayout>
  );
}
