// components/MovieCard.js

import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const { imageUrl, bannerImage, name, releaseYear, director, duration, genres, description } = movie;

  return (
    <div className="movie-card">
      <div className="movie-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="movie-details">
        <div className="banner">
          <img src={bannerImage} alt="Banner" />
          <div className='top-deets'>
            <h2 style={{padding:'0', margin:'0'}}>{name}</h2>
            <div className="movie-info">
              <p>{releaseYear} | {director}</p>
              <div>
                <span className="button-like">{duration} min</span>
                <span>{genres.join(', ')}</span>
              </div>
            </div>
          </div>
        </div>
        <p className="description">{description}</p>
        <div className="icons">
          <i className="fas fa-heart"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
