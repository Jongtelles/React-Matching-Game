import React, {Component} from 'react';
import "./Navbar.css";

class Navbar extends Component {
  state = {
    score: 0,
    topScore: 0,
    lastGuess: 'Click an Image to start'
  };
  render() {
    return (
      <nav
        className="navbar navbar-dark bg-dark fixed-top mb-2 justify-content-around text-light">
        <a className="navbar-brand" href="/">
          Match It
        </a>

        <h2>{this.state.lastGuess}</h2>

        <h3>Score: {this.state.score} | Top Score: {this.state.topScore}</h3>

      </nav>
    )
  }
}

export default Navbar;
