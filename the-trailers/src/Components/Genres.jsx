import axios from "axios";
import { useEffect, useState } from "react";

export default function Genres() {
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState();
  useEffect(() => {
    const getGenres = async () => {
      const response = await axios.get("http://185.228.81.212:8081/api/genres");
      setGenres(response.data);
    };
    getGenres();
  }, []);

  return (
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
  );
}
