import axios from "axios";
import React, { useEffect, useState } from "react";

export default function SimilarMovies({genreId}) {
  if (!genreId) {
    return ('Error')
  }
    const [similarMovies, setSimilarMovie] = useState([])
    useEffect(() => {
      const getSimilarMovie = async () => {
        const movies = [];
        const moviesApi = await axios.get(`http://185.228.81.212:8081/api/genres/${genreId.id}/movies`);
        for (let i = 0; i < moviesApi.lenght; i++) {
          const movieData = [];
          const randomNumber = Math.random(moviesApi.lenght);
          console.log(moviesApi[randomNumber].imdb)
          const movie = await axios.get(`http://www.omdbapi.com/?i=${moviesApi[randomNumber].imdb}&apikey=b3012fa5&r=json`);
          movieData.id = randomNumber;
          movieData.name = movie.Title;
          movieData.poster = movie.data.Poster;
          movies.push(movieData);
        }
        setSimilarMovie(movies)
      }
      getSimilarMovie()
    },[genreId])
    return (
        <>
        {similarMovies.map((movie) => (
            <Link to={`/movie/${movie.id}`} className={`aspect-[2/3]`}>
                <div
                  className={`h-full w-full group bg-no-repeat bg-contain rounded-xl`}
                  style = {{
                      backgroundImage: `${movie.poster}`
                  }}
                >
                  <div class="opacity-0 transition-all flex duration-300 ease-in-out group-hover:opacity-100 !bg-[#010414]/90 h-full w-full">
                    <span class="text-4xl font-bold m-auto">{movie.name}</span>
                  </div>
                </div>
            </Link>
          )
        )}
        </>
    );
};