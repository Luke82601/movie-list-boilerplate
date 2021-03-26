import React from 'react';

const MovieListItem = (props) => (
  <ul className='movies'>
    <li>
      <span>{props.movie.title}</span>
      <button onClick={() => (props.toggleWatch(props.movie))}>Watch</button>
    </li>
  </ul>
)

export default MovieListItem;