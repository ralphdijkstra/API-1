import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useParams } from "react-router-dom";
import DefaultLayout from "../../Layouts/DefaultLayout";
import HeroSection from "../../Components/Client/HeroSection";

export default function Movie() {
  let { id } = useParams();
  const [movieData, setMovieData] = useState([]);
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
      <HeroSection />
      <div
        id="content"
        class="mt-[20vh] z-10 w-full px-8 lg:px-[10rem] transition-all duration-700 ease-in-out"
      >
        <div class="mt-[40vh] py-[3rem] flex flex-col w-full space-y-8 transition-all duration-300 ease-in-out">
          <div class="mt-[2rem] space-y-2 z-[999]">
            <h2 class="text-[3rem] font-semibold">{movieData.title}</h2>
            <p class="uppercase !mt-0 text-xl">Komt uit in 2023</p>
            <div class="gap-[0.5rem] flex flex-row">
              {genres.map((genre) => (
                <a class="px-3 py-1 bg-gray-700/40 rounded-xl drop-shadow-sm border-2 border-white/60 text-white/60 hover:text-white hover:border-white transition-colors ease-in-out duration-300">
                  {genre.name}
                </a>
              ))}
            </div>
          </div>

          <div class="grid grid-cols-2 lg:grid-cols-6 auto-rows-[5rem] md:auto-rows-[10rem] w-full gap-[2rem]">
            <button class="hidden bg-green-500/70 backdrop-blur-[2px] rounded-3xl md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="fill-white m-auto w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            </button>
            <a class="bg-gray-700/70 hover:bg-gray-700 transition-colors ease-in-out duration-300 backdrop-blur-[2px] rounded-3xl flex flex-col justify-center">
              <p class="mx-auto text-2xl font-semibold tracking-wide">
                Netflix
              </p>
              <p class="mx-auto text-slate-300 uppercase text-sm">Platform</p>
            </a>
            <a class="bg-gray-700/70 hover:bg-gray-700 transition-colors ease-in-out duration-300 backdrop-blur-[2px] rounded-3xl flex flex-col justify-center">
              <p class="mx-auto text-2xl font-semibold tracking-wide">9.3</p>
              <p class="mx-auto text-slate-300 uppercase text-sm">
                Overall rating
              </p>
            </a>
            <a class="bg-gray-700/70 hover:bg-gray-700 transition-colors ease-in-out duration-300 backdrop-blur-[2px] rounded-3xl flex flex-col justify-center">
              <p class="mx-auto text-2xl font-semibold tracking-wide">$130M</p>
              <p class="mx-auto text-slate-300 uppercase text-sm">Budget</p>
            </a>
            <a class="bg-gray-700/70 hover:bg-gray-700 transition-colors ease-in-out duration-300 backdrop-blur-[2px] rounded-3xl flex flex-col justify-center">
              <p class="mx-auto text-2xl font-semibold tracking-wide">
                120 Min
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
        <div class="grid grid-cols-1 py-[3rem] lg:!grid-cols-[70%_30%]">
          <div>
            <h4 class="text-2xl font-semibold text-white uppercase">
              Description
            </h4>
            <div class="markdown"></div>
            <button class="flex flex-row text-green-500">
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
          <div class="rounded-xl">
            <img
              class="rounded-2xl transition-all duration-300 ease-in-out hover:scale-[1.10] hover:rotate-1"
              src="./assets/img/movieplaceholder3.png"
              alt=""
            />
          </div>
          <div class="mt-8">
            <h4 class="text-2xl font-semibold text-white uppercase">
              PEOPLE INVOLVED
            </h4>
            <div class="mt-4 flex flex-wrap gap-2">
              <button class="w-[5rem] h-[5rem] rounded-xl ring-white hover:ring-[3px] transition-all duration-300 ease-in-out">
                <img
                  class="object-cover h-full w-full rounded-xl"
                  src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div class="mt-8">
            <h4 class="text-2xl font-semibold text-white uppercase">Ratings</h4>
            <div class="mt-4 flex flex-col space-y-4">
              <div class="bg-yellow-500/30 w-full h-[5rem] rounded-xl border-yellow-500/90 border-2 p-4 flex flex-row justify-between">
                <img
                  class="h-[3rem] rounded-lg"
                  src="./assets/img/ratings/imdb.png"
                  alt=""
                />
                <p class="my-auto text-3xl font-semibold max-w-fit">
                  9.4 <span class="text-sm font-normal">/ 10</span>
                </p>
              </div>
              <div class="bg-gradient-to-r from-[#ff8000]/30 via-[#00e054]/30 to-[#40bcf4]/30 w-full h-[5rem] rounded-xl border-white/90 border-2 p-4 flex flex-row justify-between">
                <img
                  class="h-[3rem] rounded-lg"
                  src="./assets/img/ratings/letterboxd.svg"
                  alt=""
                />
                <p class="my-auto text-3xl font-semibold max-w-fit">
                  94 <span class="text-sm font-normal">/ 100</span>
                </p>
              </div>
              <div class="bg-gray-500/30 w-full h-[5rem] rounded-xl border-yellow-500/90 border-2 p-4 flex flex-row justify-between">
                <img
                  class="h-[3rem] rounded-lg"
                  src="./assets/img/ratings/Metacritic.svg"
                  alt=""
                />
                <p class="my-auto text-3xl font-semibold max-w-fit">
                  94 <span class="text-sm font-normal">/ 100</span>
                </p>
              </div>
              <div class="bg-red-500/30 w-full h-[5rem] rounded-xl border-red-500/90 border-2 p-4 flex flex-row justify-between">
                <img
                  class="h-[3rem] rounded-lg"
                  src="./assets/img/ratings/rottentomatoes.svg"
                  alt=""
                />
                <p class="my-auto text-3xl font-semibold max-w-fit">
                  94 <span class="text-sm font-normal">%</span>
                </p>
              </div>
            </div>
          </div>
          <div class="mt-8 col-span-2">
            <h4 class="text-2xl font-semibold text-white uppercase">
              Platforms
            </h4>
            <div class="mt-4 flex flex-row h-[5rem]" id="platforms">
              <a class="netflix">
                <img
                  class="h-full"
                  src="./assets/img/platforms/netflix.png"
                  alt=""
                />
              </a>
              <a class="netflix">
                <img
                  class="h-full"
                  src="./assets/img/platforms/netflix.png"
                  alt=""
                />
              </a>
              <a class="netflix">
                <img
                  class="h-full"
                  src="./assets/img/platforms/netflix.png"
                  alt=""
                />
              </a>
              <a class="netflix">
                <img
                  class="h-full"
                  src="./assets/img/platforms/netflix.png"
                  alt=""
                />
              </a>
              <a class="netflix">
                <img
                  class="h-full"
                  src="./assets/img/platforms/netflix.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div class="py-[3rem]">
          <h4 class="text-2xl font-semibold text-white uppercase">
            Similar movies
          </h4>
          <div class="grid grid-cols-5 max-h-fit mt-8 gap-8">
            {/* Similar Movie Panels */}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
