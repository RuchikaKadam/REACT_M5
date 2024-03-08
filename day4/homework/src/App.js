import './App.css';
import React from 'react';
import moviesData from './moviesData.json';
import MovieCard from './components/MovieCard';

const App = () => {
  return (
    <div className="App" style={{padding:"5%", backgroundColor:"black", color:"grey"}}>
      <h1>Movie Cards</h1>
      <div className="movie-container">
        {moviesData.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
