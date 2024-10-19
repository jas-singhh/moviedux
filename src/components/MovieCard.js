import React from "react";

export default function MovieCard({ movie }) {
  const imageErrorHandler = (e) => {
    e.target.src = "images/default.jpg";
  };

  return (
    <div key={movie.id} className="movie-card">
      <img className="movie-card-image" src={"images/" + movie.image} alt={movie.title} onError={imageErrorHandler} />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-rating">Rating: {movie.rating}</p>
        <p className="movie-card-genre">Genre: {movie.genre}</p>
      </div>
    </div>
  );
}
