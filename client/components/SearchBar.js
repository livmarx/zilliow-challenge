import React from 'react';
import getRepoNames from './getRepoNames';
import ErrorMessage from './ErrorMessage';
// import shhhh from '../../shhhh';
import Table from './Table';
import UserInfo from './UserInfo';

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
      `https://api.github.com/users/${
        this.state.input
      }?access_token=${GITHUB_KEY}`
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
        <form onSubmit={this.handleSubmit}>
          Search:{'  '}
          <input
            className="input-bar"
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
        <p className="github">Powered by Github</p>
        <br />
        {this.state.status === true && (
          <div>
            <UserInfo user={user} />
            <div className="repos">
              <p>Repos with the Top Ten Most Commits Over the Last Year</p>
            </div>
          </div>
        )}
        {this.state.status === true && <Table data={repos} />}
        {this.state.status === false && (
          <div>
            <ErrorMessage userName={this.state.lastInput} />
          </div>
        )}
      </div>
    );
  }
}
