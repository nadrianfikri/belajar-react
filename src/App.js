import React, { Component } from 'react';

function Greeting(props) {
  return <h1>Hallo {props.name}</h1>;
}

export class App extends Component {
  render() {
    return (
      <div>
        <h1> Ini Halaman</h1>
        <Greeting name="fikri" />
      </div>
    );
  }
}

export default App;
