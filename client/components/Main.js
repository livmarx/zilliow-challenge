import React from 'react';
import SingleTodo from './SingleTodo';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>LIST</h1>
        <SingleTodo />
      </div>
    );
  }
}
