import axios from "axios";
import React, { useEffect, useState } from "react";
import Tooltip from "../Tooltip";

export default function Director({id}) {
    if(!id) {
        return (<></>)
    }
    const [directors, setDirectors] = useState([]);
    useEffect(() => {
      const getDirectors = async () => {
        const response = await axios
          .get(`http://www.omdbapi.com/?i=${id}&apikey=b3012fa5&r=json`)
          .catch(function (error) {console.log(error) })

        setDirectors(response.data.Director.split(","))
      }
      getDirectors()
    },[id])
    return (
        <>
        {directors.map((director) => (
            <Tooltip text={director} type="Director">
            <div class="w-[5rem] h-[5rem] rounded-xl ring-white hover:ring-[3px] transition-all duration-300 ease-in-out">
              <img
                class="object-cover h-full w-full rounded-xl"
                src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                alt={`Picture of ${director}`}
              />
            </div>
            </Tooltip>
        ))}
        </>
  );
};