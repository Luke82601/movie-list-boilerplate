import React from 'react';

// const AddMovie = (props) => ()

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({title: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addMovie(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Build Your Library
          <input
            name='newMovie'
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>
        <button>Add Movie</button>
      </form>
    )
  }
}

export default AddMovie;



