import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../Layouts/DashboardLayout";
import Panel from "../Components/Panel";
import { SelectedMovieContext } from "../Contexts/SelectedMovieContext";
import Properties from "../Components/Properties";
import GenreButton from "../Components/GenreButton";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const [selectedGenre, setSelectedGenre] = useState();
  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get("http://185.228.81.212:8081/api/movies");
      setMovies(response.data);
    };
    getMovies();
  }, []);

  useEffect(() => {
    const getGenres = async () => {
      const response = await axios.get("http://185.228.81.212:8081/api/genres");
      setGenres(response.data);
    };
    getGenres();
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
            <h1 className="p-5 text-3xl text-white">Movies</h1>
            <div className="px-5 text-sm">
              <p className="text-neutral-400">Filter by genre</p>
              <div className="flex gap-3 py-2 flex-wrap text-white">
                {genres.map((genre) => (
                  <button
                    key={genre.id}
                    onClick={() => setSelectedGenre(genre)}
                    className={`flex items-center justify-between rounded-md p-1 pl-2 space-x-2 ${
                      selectedGenre == genre ? "bg-blue-500" : "bg-neutral-900"
                    }`}
                  >
                    <p>{genre.name}</p>
                    <div className="flex items-center justify-center p-1 w-6 h-6 rounded-md bg-black/20">
                      <p className="text-sm font-bold m-1">0</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
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
