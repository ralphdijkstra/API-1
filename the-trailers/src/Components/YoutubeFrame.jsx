import React from "react";

export default function YoutubeFrame({ trailer }) {
  return (
    <iframe
      className="aspect-video w-full +"
      src={"https://www.youtube.com/embed/" + trailer.url}
      frameborder="0"
    />
  );
}
