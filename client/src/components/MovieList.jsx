import React from 'react';
import MovieListItem from './MovieListItem.jsx';
import SearchBar from './SearchBar.jsx';

const MovieList = (props) => (
  <div>
    <ul><h3>{props.searchItem}</h3></ul>
    {props.movies.map((movie, i) => (
      <MovieListItem
        movie={movie}
        key={movie + i}
        toggleWatch={props.toggleWatch}
      />
    ))}
  </div>
)

export default MovieList;