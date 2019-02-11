import React from 'react';
import SearchBar from './SearchBar';

export default class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <div>
          <div className="header">
            <h1>Zillow Challenge</h1>
            <p>By Olivia Marks</p>
          </div>
          <SearchBar />
        </div>
      </div>
    );
  }
}
