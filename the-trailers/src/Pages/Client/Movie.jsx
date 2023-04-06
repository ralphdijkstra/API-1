import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useParams } from "react-router-dom";
import DefaultLayout from "../../Layouts/DefaultLayout";
import HeroSection from "../../Components/Client/HeroSection";

export default function Movie() {
  let { id } = useParams();
  const [movieData, setMovieData] = useState([]);
  // const [trailers, setTrailers] = useState([]);
  let ratings = [];

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
    const getRatings_imdb = async () => {
      const response = await axios.get(
        `http://www.omdbapi.com/?i=${movieData.imdb}&apikey=b3012fa5&plot=full&r=json`
      );
      ratings.imdb = response.data.imdbRating;
    };
    getRatings_imdb();
  }, [movieData]);

  return (
      <DefaultLayout>
        <HeroSection />
      </DefaultLayout>
  );
}
