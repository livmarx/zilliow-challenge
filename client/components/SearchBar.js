import React from 'react';
import axios from 'axios';

import getRepoNames from './getRepoNames';
import { getUser } from '../store/actions';
import { connect } from 'react-redux';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      user: {},
      repos: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const user = (await axios.get(
      `https://api.github.com/users/${this.state.input}`
    )).data;
    const repos = await getRepoNames(this.state.input);
    this.setState({
      user,
      repos,
      input: '',
    });
  }

  render() {
    const user = this.state.user;
    const repos = this.state.repos;
    console.log('USER: ', user);
    console.log('REOPS: ', repos);
    return (
      <div className="search-bars">
        <form onSubmit={this.handleSubmit}>
          Search:{'  '}
          <input
            type="text"
            name="username"
            value={this.state.input}
            onChange={this.handleChange}
          />{' '}
          <button
            type="submit"
            value="Search"
            className="myButton"
            onClick={this.handleSubmit}
          >
            Seach
          </button>
        </form>
        <div>{user.login ? <p>{user.login}</p> : <p>HHHHHHH</p>}</div>
      </div>
    );
  }
}
// connect component to redux store:

const mapStateToProps = state => {
  return { repos: state.repos, user: state.user };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: searchInput => dispatch(getUser(searchInput)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
