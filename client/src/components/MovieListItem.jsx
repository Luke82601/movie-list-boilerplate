import React from 'react';

const MovieListItem = (props) => (
  <ul className='movies'>
    <li>
      <span>{props.movie.title}</span>
      <div className="wrg-toggle">
          <div className="wrg-toggle-container">
            <div className="wrg-toggle-uncheck">
                <span>Watched</span>
            </div>
          </div>
          <div className="wrg-toggle-circle"></div>
          <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
      </div>
    </li>
  </ul>
)

export default MovieListItem;