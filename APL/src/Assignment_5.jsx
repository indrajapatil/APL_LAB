import React, { Component } from 'react';
import './App.css';

class Program extends Component {
  internalStyle = {
    backgroundColor: '#e3f2fd',
    color: '#0d47a1',
    padding: '15px',
    borderRadius: '10px',
    textAlign: 'center',
    marginTop: '20px',
  };

  render() {
    return (
      <div className="container">

        <div style={this.internalStyle}>
          <h2>Internal CSS Styling</h2>
        </div>

        <div
          style={{
            backgroundColor: '#fff3e0',
            color: '#e65100',
            padding: '15px',
            borderRadius: '10px',
            textAlign: 'center',
            marginTop: '20px',
          }}
        >
          <h2>Inline CSS Styling</h2>
        </div>

        <div className="external-box">
          <h2>External CSS Styling</h2>
        </div>
      </div>
    );
  }
}

export default Program;