import axios from "axios";
import { useEffect, useState } from "react";

export default function HeroSection({id}) {
  const [ytId, setYtId] = useState([]);
  useEffect(() => {
    const getTrailer = async () => {
      const response2 = await axios
        .get(`http://185.228.81.212:8081/api/movies/${id}/trailers`)
        .catch(function (error) {console.log(error) })

      for (var i=0; i<response2.data.length; i++) {
        if (response2.data[i]["type"].match("Official Trailer")) {
          setYtId(response2.data[i]["url"])
          break
        } else {
          setYtId(response2.data[(response2.data.length - 1)]["url"])
        };
      }
    }
    getTrailer()
  },[id])

  return (
    <div
      className="h-[100vh] absolute top-0 w-full"
      style={{
        backgroundImage: `url(https://img.youtube.com/vi/${ytId}/maxresdefault.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="relative w-full h-full">
        <div
          id="fadebg"
          className="transition-all duration-700 ease-in-out bg-gradient-to-b from-[#010414]/20 via-[#010414]/20 to-[#010414]/100 h-full bg-no-repeat flex w-full"
        ></div>
      </div>
    </div>
  );
}
