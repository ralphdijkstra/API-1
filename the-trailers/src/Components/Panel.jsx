import React, { useContext, useEffect, useState } from "react";
import { SelectedMovieContext } from "../Contexts/SelectedMovieContext";
import axios from "axios";

export default function Panel({ movie }) {
  const [poster, setPoster] = useState();

  useEffect(() => {
    const getPoster = async () => {
      const response = await axios.get(
        `http://www.omdbapi.com/?i=${movie.imdb}&apikey=b3012fa5&plot=full&r=json`
      );
      setPoster(response.data.Poster);
    };
    getPoster();
  }, []);

  const { selectedMovie, setSelectedMovie } = useContext(SelectedMovieContext);
  return (
    <button
      key={movie.id}
      className={`h-40 w-28 rounded-lg border-2 text-white ${
        selectedMovie === movie
          ? "border-blue-500"
          : "border-transparent hover:border-white"
      }`}
      style={{
        backgroundImage: `url(${poster})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      onClick={() => {
        selectedMovie === movie
          ? setSelectedMovie(null)
          : setSelectedMovie(movie);
      }}
    ></button>
  );
}
