import React from "react";

export default function MovieCard({ movie }) {
  const imageErrorHandler = (e) => {
    e.target.src = "images/default.jpg";
  };

  const getRatingColour = (rating) => {
    if (rating >= 8) {
      return "rating-good";
    } else if (rating >= 6) {
      return "rating-ok";
    } else {
      return "rating-bad";
    }
  };

  return (
    <div key={movie.id} className="movie-card">
      <img className="movie-card-image" src={"images/" + movie.image} alt={movie.title} onError={imageErrorHandler} />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className={`movie-card-rating ${getRatingColour(movie.rating)}`}>{movie.rating}</p>
        <p className="movie-card-genre">Genre: {movie.genre}</p>
      </div>
    </div>
  );
}
