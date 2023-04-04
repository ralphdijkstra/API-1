import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  })
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
  );
}
