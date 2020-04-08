import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const JSX = (
      <div>
        <h1>Hello World</h1>
        <p>Lets render this to the DOM</p>
      </div>
  );

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
      {JSX}
      <button onClick={() => this.setState({ liked: true })}>
        Like
      </button>
    </div>
  );
}

export default App;
