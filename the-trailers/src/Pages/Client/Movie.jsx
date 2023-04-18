import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useParams } from "react-router-dom";
import DefaultLayout from "../../Layouts/DefaultLayout";
import HeroSection from "../../Components/Client/HeroSection";
import Ratings from "../../Components/Client/Ratings";
import PlayButton from "../../Components/Client/PlayButton";
import Tooltip from "../../Components/Client/Tooltip";
import PeopleInvolved from "../../Components/Client/PeopleInvolved";
import SimilarMovies from "../../Components/Client/SimilarMovies";

export default function Movie() {
  let { id } = useParams();
  const [movieData, setMovieData] = useState([]);
  const [imdbData, setIMDBData] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top: 150,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const getMovie = async () => {
      const response = await axios
        .get(`http://185.228.81.212:8081/api/movies/${id}`)
        .catch(function (error) {});
      setMovieData(response.data);
      
      const response2 = await axios
      .get(`http://www.omdbapi.com/?i=${response.data.imdb}&apikey=b3012fa5&plot=full&r=json`)
      .catch(function (error) {console.log(error) })
      setIMDBData(response2.data)
    };
    getMovie();
  }, [id]);

  useEffect(() => {
    const getGenres = async () => {
      const response = await axios.get(
        `http://185.228.81.212:8081/api/movies/${id}/genres`
      );
      setGenres(response.data);
    };
    getGenres();
  }, [id]);
  return (
    <DefaultLayout>
      <HeroSection id={id}/>
      <div
        id="content"
        class="mt-[20vh] z-10 w-full px-8 lg:px-[10rem] transition-all duration-700 ease-in-out"
      >
        <div class="mt-[40vh] py-[3rem] flex flex-col w-full space-y-8 transition-all duration-300 ease-in-out">
          <div class="mt-[2rem] space-y-2 z-[999]">
            <h2 class="text-[3rem] font-semibold">{movieData.title}</h2>
            <p class="uppercase !mt-0 text-xl">{movieData.release_date}</p>
            <div class="gap-[0.5rem] flex flex-row">
              {genres.map((genre) => (
                <a class="px-3 py-1 bg-gray-700/40 rounded-xl drop-shadow-sm border-2 border-white/60 text-white/60 hover:text-white hover:border-white transition-colors ease-in-out duration-300">
                  {genre.name}
                </a>
              ))}
            </div>
          </div>

          <div class="grid grid-cols-2 lg:grid-cols-6 auto-rows-[5rem] md:auto-rows-[10rem] w-full gap-[2rem]">
            <PlayButton id={id}/>
            <a class="bg-gray-700/70 hover:bg-gray-700 transition-colors ease-in-out duration-300 backdrop-blur-[2px] rounded-3xl flex flex-col justify-center">
              <p class="mx-auto text-2xl font-semibold tracking-wide">
                N/A
              </p>
              <p class="mx-auto text-slate-300 uppercase text-sm">Platform</p>
            </a>
            <a class="bg-gray-700/70 hover:bg-gray-700 transition-colors ease-in-out duration-300 backdrop-blur-[2px] rounded-3xl flex flex-col justify-center">
              <p class="mx-auto text-2xl font-semibold tracking-wide">{imdbData.imdbRating}</p>
              <p class="mx-auto text-slate-300 uppercase text-sm">
                Overall rating
              </p>
            </a>
            <a class="bg-gray-700/70 hover:bg-gray-700 transition-colors ease-in-out duration-300 backdrop-blur-[2px] rounded-3xl flex flex-col justify-center">
              <p class="mx-auto text-2xl font-semibold tracking-wide">{imdbData.BoxOffice}</p>
              <p class="mx-auto text-slate-300 uppercase text-sm">Earnings</p>
            </a>
            <a class="bg-gray-700/70 hover:bg-gray-700 transition-colors ease-in-out duration-300 backdrop-blur-[2px] rounded-3xl flex flex-col justify-center">
              <p class="mx-auto text-2xl font-semibold tracking-wide">
                {movieData.runtime}
              </p>
              <p class="mx-auto text-slate-300 uppercase text-sm">length</p>
            </a>
            <a class="bg-gray-700/70 hover:bg-gray-700 transition-colors ease-in-out duration-300 backdrop-blur-[2px] rounded-3xl flex flex-col justify-center">
              <p class="mx-auto text-2xl font-semibold tracking-wide">
                {movieData.release_date}
              </p>
              <p class="mx-auto text-slate-300 uppercase text-sm">
                Release date
              </p>
            </a>
          </div>
        </div>
        <div class="grid grid-cols-1 py-[3rem] lg:!grid-cols-[60%_30%] justify-between">
          <div>
            <h4 class="text-2xl font-semibold text-white uppercase">
              Description
            </h4>
            <div class="markdown">{movieData.description}</div>
          </div>
          <div class="rounded-xl">
            <img
              class="rounded-2xl transition-all duration-300 ease-in-out hover:scale-[1.10] hover:rotate-1"
              src={imdbData.Poster}
              alt="Movie poster"
            />
          </div>
          <div class="mt-8">
            <h4 class="text-2xl font-semibold text-white uppercase">
              PEOPLE INVOLVED
            </h4>
            <div class="mt-4 flex flex-wrap gap-2">
              <PeopleInvolved id={movieData.imdb}/>
            </div>
          </div>
          <div class="mt-8">
            <h4 class="text-2xl font-semibold text-white uppercase">Ratings</h4>
            <div class="mt-4 flex flex-col space-y-4">
              <Ratings ratings={imdbData.Ratings}/>
            </div>
          </div>
        </div>
        <div class="py-[3rem]">
          <h4 class="text-2xl font-semibold text-white uppercase">
            Similar movies
          </h4>
          <div class="grid grid-cols-5 max-h-fit mt-8 gap-8 overflow-hidden">
            {/* Similar Movie Panels */}
            <SimilarMovies genreId={genres[0]}/>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
