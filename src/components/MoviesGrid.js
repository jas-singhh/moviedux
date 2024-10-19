import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("./movies.json")
      .then((res) => res.json())
      .then((movies) => setMovies(movies));
  }, []);

  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
