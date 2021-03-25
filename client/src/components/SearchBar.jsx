import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({title: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.showSearch(this.state.title)
  }

  render() {
    return (
      <div>
        {/* {this.props.movies.map((movie, i) => ( */}
          <form onSubmit={this.handleSubmit}>
            <label> Search
              <input
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </label>
            <button id="add">Search</button>
          </form>
        {/* ))} */}
      </div>
    )
  }
}

export default SearchBar;