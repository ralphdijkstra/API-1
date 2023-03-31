export default function MovieButton({ movie, selectedMovie, deselectMovie, selectMovie }) {
    return (
        <button
            key={movie.id}
            className={`text-white rounded-lg}`}
            onClick={() => {
                selectedMovie == movie ? deselectMovie() : selectMovie(movie);
            }}
        >
            <div
                style={{
                    backgroundImage: `url(${movie.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
                className={`flex border-2 h-40 w-28 rounded-lg items-center justify-center ease-in-out duration-200 transition-all
            ${
                selectedMovie == movie
                    ? "border-blue-500"
                    : "border-transparent hover:border-white"
            }`}
            ></div>
        </button>
    );
}
