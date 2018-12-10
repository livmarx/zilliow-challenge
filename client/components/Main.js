import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  async componentDidMount() {
    const res = await axios.get('/api/allUsers');
    const allEvents = res.data;
    this.setState({ events: allEvents });
  }

  render() {
    return (
      <div>
        <h1>LIST</h1>
      </div>
    );
  }
}
