import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Dashboard/Home";
import Movies from "./Pages/Dashboard/Movies";
import { useEffect } from "react";
import Movie from "./Pages/Client/Movie";

export default function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Home />} />
      <Route path="/dashboard/movies" element={<Movies />} />
      <Route path="/movie/:id" element={<Movie />} />
    </Routes>
  );
}
