import React from 'react';

const MovieListItem = (props) => (
  <ul className='movies'>
    <li>
      <span>{props.movie.title}</span>
    </li>
  </ul>
)

export default MovieListItem;