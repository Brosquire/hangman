import React from "react";

import Hangman from "./components/Hangman/Hangman.component";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Hangman />
      </div>
    );
  }
}

export default App;
