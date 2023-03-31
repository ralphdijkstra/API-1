import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../Layouts/DashboardLayout";
import Panel from "../Components/Panel";
import { SelectedMovieContext } from "../Contexts/SelectedMovieContext";
import Properties from "../Components/Properties";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get("http://127.0.0.1:8000/api/movies");
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
            selectedMovie != null ? "grid-cols-[60%_40%]" : "grid-cols-[100%_0%]"
          }`}
        >
          <div className="px-5">
            <h1 className="p-5 text-3xl text-white">Movies</h1>
            <div className="flex flex-wrap justify-center gap-2 text-white">
              {movies.map((movie) => (
                <Panel movie={movie} />
              ))}
            </div>
          </div>
          <div className="bg-neutral-900 text-white overflow-y-auto h-screen scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-800">
            {(selectedMovie != null) ? <Properties/> : null }
          </div>
        </div>
      </SelectedMovieContext.Provider>
    </DashboardLayout>
  );
}
