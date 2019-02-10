import React from 'react';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      repos: [],
    };
  }

  render() {
    const user = this.props.user || {};
    console.log('USER: ', user);
    console.log('USER.login: ', user.login);
    return (
      <div className="main">
        <div className="header">
          <h4>Zillow Challenge</h4>
          <SearchBar />
          <p>{this.props.user.login ? 'Logged In' : 'Not Logged In'}</p>
          <div />
        </div>
      </div>
    );
  }
}

// connect component to redux store:
const mapStateToProps = state => {
  return { repos: state.repos, user: state.user };
};

export default connect(mapStateToProps)(Main);
