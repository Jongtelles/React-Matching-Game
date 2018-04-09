import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";

class App extends Component {
  state = {
    cards: [],
    score: 0,
    topScore: 0,
    info: '',
    lastGuess: ''
  };

  componentDidMount() {

  }

  cardShuffler() {

  }

  handleOnClick() {

  }

  render() {
    return (
      <div>
      <Navbar/>
      <Jumbo/>
      <Container/>
      <Footer/>
      </div>
    )
  }
}

export default App;
