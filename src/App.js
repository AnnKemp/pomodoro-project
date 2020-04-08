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
    const element = React.createElement(
        'h1',
        {className: 'greeting'},
        'Dadada!'
    );
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
      {JSX}<br />{element}
      <button onClick={() => this.setState({ liked: true })}>
        Like
      </button>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}
setInterval(App, 1000);
export default App;

