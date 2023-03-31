import DashboardLayout from "../Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import MovieProperties from "../Components/MovieProperties";
import api from "@/api.jsx";
import GenreButton from "../Components/GenreButton";
import MovieButton from "../Components/MovieButton";

export default function Movies() {
    const [showProperties, setShowProperties] = useState(false);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState("");
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                let response = "";
                if (selectedGenre == "") {
                    response = await api.get("/movies");
                } else {
                    response = await api.get(`/movies?genre=${selectedGenre.name}`);
                }
                if (response && response.data) setMovies(response.data);
                setLoading(false);
            } catch (error) {
                if (error.response) {
                    //Not in the 200 response range
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else {
                    console.log(`Error: ${error.message}`);
                }
            }
        };
        fetchMovies();
    }, [selectedGenre]);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await api.get("/genres");
                if (response && response.data) setGenres(response.data);
                setLoading(false);
            } catch (error) {
                if (error.response) {
                    //Not in the 200 response range
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else {
                    console.log(`Error: ${error.message}`);
                }
            }
        };
        fetchGenres();
    }, []);

    const selectMovie = (movie) => {
        setShowProperties(true);
        setSelectedMovie(movie);
    };

    const deselectMovie = () => {
        setShowProperties(false);
        setSelectedMovie("");
    };

    const handleFilter = (genre) => {
        setMovies([]);
        setLoading(true);
        if (selectedGenre == genre) {
            setSelectedGenre("");
            setLoading(true);
        } else {
            setSelectedGenre(genre);
        }
    };

    return (
        <DashboardLayout>
            <Head title="Movies" />
            <div
                className={`grid h-full text-white ${showProperties
                        ? "lg:grid-cols-[55%_45%] grid-cols-[0%_100%]"
                        : "grid-cols-[100%_0%]"
                    }`}
            >
                <div className="bg-black h-screen overflow-auto scrollbar-hide">
                    {/* Title */}
                    <div className="p-5 sticky top-0 bg-black">
                        <h1 className="text-3xl">Movies</h1>
                    </div>
                    {/* Filters */}
                    <div className="px-5 text-sm">
                        <p className="text-neutral-400">Filter by genre</p>
                        <div className="flex gap-3 py-2 flex-wrap">
                            {genres.map((genre) => (
                                <GenreButton genre={genre} selectedGenre={selectedGenre} handleFilter={handleFilter}/>
                            ))}
                        </div>
                    </div>
                    {/* Loading Icon */}
                    <div
                        className={`items-center justify-center ${loading ? "flex" : "hidden"
                            }`}
                    >
                        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                    </div>
                    {/* Movie panels */}
                    <div className={`flex flex-wrap gap-2 my-5 justify-center`}>
                        {movies.map((movie) => (
                            <MovieButton movie={movie} selectedMovie={selectedMovie} deselectMovie={deselectMovie} selectMovie={selectMovie}/>
                        ))}
                    </div>
                </div>
                {/* Movie properties sidetab */}
                <div className="lg:bg-neutral-900 bg-black">
                    <div
                        className={`items-start flex-col duration-300 delay-300 ${showProperties ? "flex" : "hidden"
                            }`}
                    >
                        <MovieProperties
                            deselectMovie={deselectMovie}
                            selectedMovie={selectedMovie}
                        />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
