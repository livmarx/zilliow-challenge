import React from 'react';
import SingleTodo from './SingleTodo';
import axios from 'axios';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const res = await axios.get('/api/allUsers');
    const allUsers = res.data;
    this.setState({ users: allUsers });
  }

  render() {
    console.log('this.state.users: ', this.state.users);
    return (
      <div>
        <h1>LIST</h1>
        <SingleTodo />
      </div>
    );
  }
}
