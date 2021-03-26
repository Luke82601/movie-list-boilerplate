import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';

const movies = [];
const searchItem = '';
const watchedList = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = { movies, searchItem, watchedList }
    this.showSearch = this.showSearch.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.toggleWatch = this.toggleWatch.bind(this)
  }

  toggleWatch(movie) {
    let watched = this.state.watchedList.slice();
    watched.push(movie);
    this.setState({ watchedList: watched }, () => {console.log(this.state)});
  }

  addMovie(movie) {
    let list = this.state.movies.slice();
    list.push(movie)
    this.setState({ movies: list }, () => {console.log(this.state)})
  }

  showSearch(letter) {
    this.state.movies.forEach((movie, index) => {
      if (movie.title.includes(letter)) {
        let results = []
        results.push(movie.title);
        this.setState({ searchItem: results })
      }
    })
  }

  render() {
    return(
      <div>
        <h1>Movie List</h1>
        <AddMovie
          addMovie={this.addMovie}
          movies={this.state.movies}/>
        <SearchBar
          movies={this.state.movies}
          showSearch={this.showSearch}/>
        <MovieList
          searchItem={this.state.searchItem}
          movies={this.state.movies}
          toggleWatch={this.toggleWatch}/>
      </div>
    )
  }
}

export default App;