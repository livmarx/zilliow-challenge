import React from 'react';
import SearchBar from './SearchBar';

export default class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="header">
          <h4>Zillow Challenge</h4>
          <SearchBar />
          <div />
        </div>
      </div>
    );
  }
}
