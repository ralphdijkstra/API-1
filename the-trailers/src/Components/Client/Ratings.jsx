import { useEffect, useState } from "react";

export default function Ratings({ratings}) {
    if (!ratings) {
        return ( <></> )
    }
    const updatedArray = ratings.map((item) => {
        if (item.Source === "Internet Movie Database") {
          return { ...item, Source: "IMDB" };
        }
        return item;
    });
    return (
        <>
        {updatedArray.map((rating) => (
            <div class="bg-gray-700/70 w-full h-[5rem] rounded-xl border-gray-600/90 border-2 p-4 flex flex-row text-white/90 justify-between">
              <p className="my-auto font-semibold text-2xl">{rating.Source}</p>
              <p class="my-auto text-3xl font-semibold max-w-fit">
                {rating.Value}
              </p>
            </div>
        ))}
        </>
    )
}