import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("./movies.json")
      .then((res) => res.json())
      .then((movies) => setMovies(movies));
  }, []);

  const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().trim().includes(searchTerm.toLowerCase().trim()));

  return (
    <div>
      <input
        type="text"
        id="search"
        className="search-input"
        placeholder="Search Movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
