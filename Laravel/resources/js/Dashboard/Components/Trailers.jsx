import api from "@/api";
import {
    CheckIcon,
    PencilIcon,
    PlusIcon,
    TrashIcon,
    XMarkIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function Trailers({ movie }) {
    const [trailers, setTrailers] = useState([]);
    const [selectedTrailer, setSelectedTrailer] = useState();
    const [type, setType] = useState();
    const [url, setUrl] = useState();
    const [showForm, toggleShowForm] = useState(false);

    useEffect(() => {
        const getTrailers = async () => {
            try {
                const response = await api.get("/trailers");
                if (response && response.data) setTrailers(response.data);
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

        getTrailers();
    }, []);

    const handleCreate = async () => {
        const newTrailer = { type: type, url: url, movie_id: movie.id };
        try {
            const response = await api.post("/trailers", newTrailer);
            const allTrailers = [...trailers, response.data];
            setTrailers(allTrailers);
            clearValues();
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    };

    const handleUpdate = async (id) => {
        const updatedTrailer = { type: type, url: url, movie_id: movie.id };
        try {
            const response = await api.put(`/trailers/${id}`, updatedTrailer);
            setTrailers(
                trailers.map((trailer) =>
                    trailer.id === id ? { ...response.data } : trailer
                )
            );
            clearValues();
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    };

    const handleDelete = async (id) => {
        try {
            await api.delete(`/trailers/${id}`);
            const trailerList = trailers.filter((trailer) => trailer.id !== id);
            setTrailers(trailerList);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    };

    const checkURL = (i) => {
        document.getElementById(`iframe${i}`).src =
            "https://www.youtube.com/embed/" + url;
    };

    const clearValues = () => {
        setType("");
        setUrl("");
        document.getElementById(`iframe2`).src =
            "https://www.youtube.com/embed/";
        document.getElementById(`iframe1`).src =
            "https://www.youtube.com/embed/" + selectedTrailer.url;
    };

    return (
        <>
            {trailers.map((trailer) =>
                trailer.movie_id == movie.id ? (
                    trailer == selectedTrailer ? (
                        // Update
                        <div
                            className="flex flex-col gap-3 p-5"
                            key={trailer.id}
                        >
                            <div className="flex justify-between items-center">
                                <input
                                    onChange={(e) => {
                                        setType(e.target.value);
                                    }}
                                    className="flex-1 p-0 bg-transparent border-transparent focus:border-transparent focus:ring-0"
                                    type="text"
                                    name="type"
                                    id="type"
                                    value={type}
                                />
                                <div className="flex space-x-2 items-center">
                                    <input
                                        onChange={(e) => {
                                            setUrl(e.target.value);
                                        }}
                                        onBlur={() => {
                                            checkURL(1);
                                        }}
                                        className="p-0 bg-transparent text-right text-neutral-400 border-transparent focus:border-transparent focus:ring-0 text-sm"
                                        type="text"
                                        name="url"
                                        id="url"
                                        value={url}
                                    />
                                    <button
                                        onClick={() => {
                                            checkURL(1);
                                        }}
                                        className="bg-neutral-800 hover:bg-neutral-700 p-1 px-2 text-sm flex items-center rounded-sm"
                                    >
                                        <CheckIcon className="w-4 h-4 mr-2" />
                                        Check URL
                                    </button>
                                </div>
                            </div>
                            <iframe
                                id="iframe1"
                                className="aspect-video w-full"
                                src={
                                    "https://www.youtube.com/embed/" +
                                    selectedTrailer.url
                                }
                                frameborder="0"
                            ></iframe>
                            <div className="flex justify-end gap-1">
                                <button
                                    className="flex items-center gap-1 bg-neutral-700 hover:bg-neutral-600 py-1 px-3 rounded-md"
                                    onClick={() => {
                                        clearValues();
                                        setSelectedTrailer("");
                                    }}
                                >
                                    <XMarkIcon className="w-5 h-5" /> Cancel
                                </button>
                                <button
                                    className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 py-1 px-3 rounded-md"
                                    onClick={() => {
                                        handleUpdate(selectedTrailer.id);
                                    }}
                                >
                                    <CheckIcon className="w-5 h-5" /> Confirm
                                </button>
                            </div>
                        </div>
                    ) : (
                        // Read
                        <div
                            className="flex flex-col gap-3 p-5"
                            key={trailer.id}
                        >
                            <div className="flex justify-between items-center">
                                <p className="flex-1">{trailer.type}</p>
                                <div className="flex space-x-2 items-center">
                                    <p className="text-neutral-400 text-sm">
                                        {trailer.url}
                                    </p>
                                    <button
                                        onClick={() => {
                                            setSelectedTrailer(trailer);
                                            setUrl(trailer.url);
                                            setType(trailer.type);
                                            toggleShowForm(false);
                                        }}
                                        className="bg-neutral-800 hover:bg-neutral-700 p-1 px-2 text-sm flex items-center rounded-sm"
                                    >
                                        <PencilIcon className="w-4 h-4 mr-2" />
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => {
                                            handleDelete(trailer.id);
                                        }}
                                        className="bg-neutral-800 hover:bg-neutral-700 p-1 px-2 text-sm flex items-center rounded-sm"
                                    >
                                        <TrashIcon className="w-4 h-4 mr-2" />
                                        Delete
                                    </button>
                                </div>
                            </div>
                            <iframe
                                id="iframe"
                                className="aspect-video w-full"
                                src={
                                    "https://www.youtube.com/embed/" +
                                    trailer.url
                                }
                                frameborder="0"
                            ></iframe>
                        </div>
                    )
                ) : null
            )}
            {/* Create */}
            <div
                className={`flex-col gap-3 p-5 ${showForm ? "flex" : "hidden"}`}
            >
                <div className="flex justify-between items-center">
                    <input
                        onChange={(e) => {
                            setType(e.target.value);
                        }}
                        className="flex-1 p-0 bg-transparent border-transparent focus:border-transparent focus:ring-0"
                        type="text"
                        name="type"
                        id="type"
                        placeholder="Type"
                        value={type}
                    />
                    <div className="flex space-x-2 items-center">
                        <input
                            onChange={(e) => {
                                setUrl(e.target.value);
                            }}
                            onBlur={() => {
                                checkURL(2);
                            }}
                            className="p-0 bg-transparent text-right text-neutral-400 border-transparent focus:border-transparent focus:ring-0 text-sm"
                            placeholder="URL"
                            type="text"
                            name="url"
                            id="url"
                            value={url}
                        />
                        <button
                            onClick={() => {
                                checkURL(2);
                            }}
                            className="bg-neutral-800 hover:bg-neutral-700 p-1 px-2 text-sm flex items-center rounded-sm"
                        >
                            <CheckIcon className="w-4 h-4 mr-2" />
                            Check URL
                        </button>
                    </div>
                </div>
                <iframe
                    id="iframe2"
                    className="aspect-video w-full"
                    src={"https://www.youtube.com/embed/"}
                    frameborder="0"
                ></iframe>
                <div className="flex justify-end gap-1">
                    <button
                        className="flex items-center gap-1 bg-neutral-700 hover:bg-neutral-600 py-1 px-3 rounded-md"
                        onClick={() => {
                            toggleShowForm(false);
                            clearValues();
                        }}
                    >
                        <XMarkIcon className="w-5 h-5" /> Cancel
                    </button>
                    <button
                        className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 py-1 px-3 rounded-md"
                        onClick={() => {
                            handleCreate();
                            toggleShowForm(false);
                        }}
                    >
                        <CheckIcon className="w-5 h-5" /> Confirm
                    </button>
                </div>
            </div>
            <button
                onClick={() => {
                    toggleShowForm(true);
                    clearValues();
                    setSelectedTrailer("");
                }}
                className={`w-full flex flex-col items-center justify-center my-3 ${
                    showForm ? "hidden" : "flex"
                }`}
            >
                <div className="m-auto bg-blue-500 hover:bg-blue-600 cursor-pointer rounded-full flex justify-center items-center w-min p-3">
                    <PlusIcon className="w-5 h-5" />
                </div>
                <div>Add new trailer</div>
            </button>
        </>
    );
}
