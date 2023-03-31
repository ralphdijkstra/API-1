export default function GenreButton({ genre, selectedGenre, handleFilter }) {
    return (
        <button
            key={genre.id}
            onClick={() => {
                handleFilter(genre);
            }}
            className={`flex items-center justify-between rounded-md p-1 pl-2 space-x-2 ${
                selectedGenre == genre ? "bg-blue-500" : "bg-neutral-900"
            }`}
        >
            <p>{genre.name}</p>
            <div className="flex items-center justify-center p-1 w-6 h-6 rounded-md bg-black/20">
                <p className="text-sm font-bold m-1">0</p>
            </div>
        </button>
    );
}
