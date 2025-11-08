import React, { Component } from 'react';

class Assignment_4a extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello from Class Component!',
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div style={{ backgroundColor: '#e8f4ff', padding: '20px', borderRadius: '8px' }}>
        <h2>{this.state.message}</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount} style={{ padding: '10px', cursor: 'pointer' }}>
          Increment
        </button>
      </div>
    );
  }
}

export default Assignment_4a;
