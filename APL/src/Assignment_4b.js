import React, { useState } from 'react';

function Assignment_4b() {
  const [message, setMessage] = useState('Hello from Function Component!');
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div style={{ backgroundColor: '#fff8e1', padding: '20px', borderRadius: '8px' }}>
      <h2>{message}</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount} style={{ padding: '10px', cursor: 'pointer' }}>
        Increment
      </button>
    </div>
  );
}

export default Assignment_4b;
