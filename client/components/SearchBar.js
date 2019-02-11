import React from 'react';
import getRepoNames from './getRepoNames';
import ErrorMessage from './ErrorMessage';
import shhhh from '../../shhhh';
import Table from './Table';

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      lastInput: '',
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
      this.setState({ status: false, input: '', lastInput: this.state.input });
    }
  }

  render() {
    const user = this.state.user;
    const repos = this.state.repos;
    console.log('USER: ', user);
    return (
      <div className="search-bars">
        <div>
          {this.state.status === null && <p>Type a GitHub username</p>}
          {this.state.status === false && (
            <div>
              <p>No matching username. Try again!</p>
              <ErrorMessage userName={this.state.lastInput} />
            </div>
          )}
          {this.state.status === true && <p>Type a GitHub username</p>}
        </div>
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
        {this.state.status === true && (
          <div>
            <p>{user.login}</p>
          </div>
        )}
        {this.state.status === true && <Table data={repos} />}
      </div>
    );
  }
}
