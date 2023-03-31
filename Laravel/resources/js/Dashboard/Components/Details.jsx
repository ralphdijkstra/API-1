export default function Details({ movie }) {
    return (
        <>
            <img src={movie.image} className="w-1/4 mx-auto m-5" />
            <div className="grid grid-cols-[25%_75%] gap-5 w-[75%] mx-auto">
                <div className="font-bold">Description:</div>
                <div>{movie.description}</div>
                <div className="font-bold">Release date:</div>
                <div>{movie.release_date}</div>
                <div className="font-bold">Runtime:</div>
                <div>{movie.runtime}</div>
            </div>
        </>
    );
}
