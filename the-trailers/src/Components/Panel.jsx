import React, { useContext } from "react";
import { SelectedMovieContext } from "../Contexts/SelectedMovieContext";

function Panel({ movie }) {
  const {selectedMovie, setSelectedMovie} = useContext(SelectedMovieContext);
  return (
      <button
        key={movie.id}
        className={`h-40 w-28 rounded-lg border-2 text-white ${
          selectedMovie === movie
            ? "border-blue-500"
            : "border-transparent hover:border-white"
        }`}
        style={{
          backgroundImage: `url(${movie.image})`,
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

export default Panel;
