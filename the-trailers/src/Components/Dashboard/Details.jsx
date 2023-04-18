import { useContext, useEffect, useState } from "react";
import { SelectedMovieContext } from "../../Contexts/SelectedMovieContext";
import axios from "axios";

export default function Details({ tab }) {
  const { selectedMovie, setSelectedMovie } = useContext(SelectedMovieContext);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      const response = await axios.get(
        `http://185.228.81.212:8081/api/movies/${selectedMovie.id}/genres`
      );
      setGenres(response.data)
    };
    getGenres();
  }, [selectedMovie, tab]);
  return (
    <>
    {genres.map((genre) => <div>{genre.name}</div>)}
    </>
  );
}
