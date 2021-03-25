import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';

var movies = [
  // {title: 'Mean Girls'},
  // {title: 'Hackers'},
  // {title: 'The Grey'},
  // {title: 'Sunshine'},
  // {title: 'Ex Machina'},
];

var searchItem = '';

class App extends React.Component {
  constructor() {
    super();
    this.state = {movies, searchItem}
    this.showSearch = this.showSearch.bind(this);
    this.addMovie = this.addMovie.bind(this);
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
        // console.log(result)
        this.setState({searchItem: results})
      }
    })
  }

  render() {
    return(
      <div>
        <h1>Movie List</h1>
          <AddMovie addMovie={this.addMovie}movies={this.state.movies}/>
          <SearchBar
            movies={this.state.movies}
            showSearch={this.showSearch}
          />
          <MovieList
            searchItem={this.state.searchItem} movies={this.state.movies}/>
      </div>
    )
  }
}

export default App;