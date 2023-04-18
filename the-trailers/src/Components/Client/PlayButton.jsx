import axios from "axios";
import { useEffect, useState } from "react";

export default function PlayButton({id}) {
    if (!id) {
        return ( <></> )
    }
    const [ytId, setYtId] = useState([]);
    useEffect(() => {
      const getTrailer = async () => {
        const response2 = await axios
          .get(`http://185.228.81.212:8081/api/movies/${id}/trailers`)
          .catch(function (error) {console.log(error) })
  
        for (var i=0; i<response2.data.length; i++) {
          if (response2.data[i]["type"].match("Official Trailer")) {
            setYtId(response2.data[i]["url"])
          };
        }
      }
      getTrailer()
    },[id])
    return (
        <>
        <a href={`https://www.youtube.com/watch?v=${ytId}`} target="_blank" class="hidden bg-green-500/70 backdrop-blur-[2px] rounded-3xl md:flex">
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
        </a>
        </>
    )
}