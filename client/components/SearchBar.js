import React from 'react';
import axios from 'axios';

import getRepoNames from './getRepoNames';
import { getUser } from '../store/actions';
import { connect } from 'react-redux';
import shhhh from '../../shhhh';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      user: {},
      repos: [],
      status: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const res = await fetch(
      `https://api.github.com/users/${this.state.input}?access_token=${shhhh}`
    );

    if (res.ok) {
      const user = await res.json();
      const repos = await getRepoNames(this.state.input);
      this.setState({
        user,
        repos,
        input: '',
        status: true,
      });
    } else {
      this.setState({ status: false, input: '' });
    }
  }

  render() {
    const user = this.state.user;
    const repos = this.state.repos;
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
        <div>
          {this.state.status === false && <p>No matching username</p>}
          {this.state.status === null && <p>Type a username</p>}
          {this.state.status === true && (
            <div>
              <p>{user.login}</p>
              <div>
                {repos.map((repo, i) => {
                  return (
                    <div key={i}>
                      <ul>
                        <li>{repo.name}</li>
                        <li>{repo.total}</li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
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
