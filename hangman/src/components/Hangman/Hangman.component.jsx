import React from "react";

import "./Hangman.styles.scss";

class Hangman extends React.Component {
  state = {
    mistake: 0,
    maxWrong: 6,
    guessed: new Set([]),
    answer: "boooyah"
  };

  handleGuess = e => {
    let letter = e.target.value;
    this.setState({
      guessed: this.state.guessed.add(letter),
      mistake: this.state.mistake + (this.state.answer.includes(letter) ? 0 : 1)
    });
  };

  guessedWord() {
    return this.state.answer
      .split("")
      .map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
  }

  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
      <button
        className="letter"
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  resetButton = () => {
    const { mistake, guessed } = this.state;
    this.setState({
      mistake,
      guessed,
      answer: "newww"
    });
  };

  render() {
    const gameOver = this.state.mistake >= this.state.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameInfo = this.generateButtons();

    if (isWinner) {
      gameInfo = "You Won!!";
    }

    if (gameOver) {
      gameInfo = "You Lose!!";
    }
    return (
      <div className="hangman">
        <h1 className="title">REACT-MAN</h1>
        <div className="guess-container">
          Wrong Guesses: {this.state.mistake} of {this.state.maxWrong}
        </div>
        <div className="image-container">
          <img src="" alt="" />
        </div>
        <div className="question-container">
          <p className="question">Guess The Animal</p>
          <p className="display-word">
            {!gameOver ? this.guessedWord() : this.state.answer}
          </p>
          <p className="game-info">{gameInfo}</p>
          <button className="reset" onClick={this.resetButton}>
            Reset Game
          </button>
        </div>
      </div>
    );
  }
}

export default Hangman;
