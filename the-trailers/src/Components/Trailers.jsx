import React, { useContext, useEffect, useState } from "react";
import { SelectedMovieContext } from "../Contexts/SelectedMovieContext";
import axios from "axios";
import { CheckIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import Modal from "./Modal";
import YoutubeFrame from "./YoutubeFrame";

export default function Trailers({ tab }) {
  const [trailers, setTrailers] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedTrailer, setSelectedTrailer] = useState();
  const { selectedMovie, setSelectedMovie } = useContext(SelectedMovieContext);

  useEffect(() => {
    const getTrailers = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/trailers?movie=${selectedMovie.id}`
      );
      setTrailers(response.data);
    };
    getTrailers();
  }, [selectedMovie, tab]);

  const closeModal = () => {
    setShowEditForm(false);
  };

  return (
    <>
      {trailers.map((trailer) => (
        <div className="flex flex-col gap-3 p-3" key={trailer.id}>
          <div className="flex items-center justify-between">
            <p className="flex-1">{trailer.type}</p>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-neutral-400">{trailer.url}</p>
              <button
                onClick={() => {
                  setShowEditForm(true);
                  setSelectedTrailer(trailer);
                }}
                className="flex items-center rounded-sm bg-neutral-800 p-1 px-2 text-sm hover:bg-neutral-700"
              >
                <PencilIcon className="mr-2 h-4 w-4" />
                Edit
              </button>
              <button
                onClick={() => {}}
                className="flex items-center rounded-sm bg-neutral-800 p-1 px-2 text-sm hover:bg-neutral-700"
              >
                <TrashIcon className="mr-2 h-4 w-4" />
                Delete
              </button>
            </div>
          </div>
          <YoutubeFrame trailer={trailer} />
        </div>
      ))}
      {/* Edit Modal */}
      {selectedTrailer != null && (
        <Modal show={showEditForm}>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <YoutubeFrame trailer={selectedTrailer} />
              <div className="grid grid-cols-[20%_75%] w-2/3 mx-auto">
                Type trailer:
                <input className="bg-transparent border-white border rounded-sm" type="text" defaultValue={selectedTrailer.type}></input>
              </div>
              <div className="grid grid-cols-[20%_70%_5%] w-2/3 mx-auto">
                URL:
                <input className="bg-transparent border-white border rounded-sm" type="text" defaultValue={selectedTrailer.url}></input>
                <button className="bg-blue-500 flex justify-center items-center rouned-md"><CheckIcon className="w-5 h-5"/></button>
              </div>
            </div>
            <div className="flex items-center justify-end space-x-3 p-3">
              <button
                onClick={() => {
                  closeModal();
                }}
                className="rounded-md bg-red-500 py-2 px-3 hover:bg-red-600 "
              >
                Cancel
              </button>
              <button className="rounded-md bg-blue-500 py-2 px-3 hover:bg-blue-600 ">
                Confirm
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
