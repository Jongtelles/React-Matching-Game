import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";
import Card from "./components/Card";
import Row from "./components/Row";
import images from "./images.json";

class App extends Component {
  state = {
    cards: [],
    score: 0,
    topScore: 0,
    guessed: [],
    info: 'Click an image to begin guessing!'
  };

  componentDidMount() {
    this.setState({cards: images});
  }

  cardShuffler(){
    this.state.cards.sort(() => {
      return 0.5 - Math.random();
  });
  }

  handleOnClick(id) {
    this.setState({
      guessed: [
        ...this.state.guessed,
        id
      ]
    });
    if (this.state.guessed.includes(id)) {
      this.setState({score: 0, guessed: [], info: 'Incorrect Guess! You LOSE! Try again!'});
      this.cardShuffler();
    } else
      this.setState({
        score: (this.state.score + 1),
        info: 'Correct! Guess again!'
      });
    this.cardShuffler();
  }

  render() {
    this.cardShuffler();
    return (
      <div>
        <Navbar
          info={this.state.info}
          score={this.state.score}
          topScore={this.state.topScore}/>
        <Jumbo/>
        <Container>
        <Row>
          {this
            .state
            .cards
            .map((card) => {
              return (<Card key={card.id} id={card.id} image={card.url} onClick={() => this.handleOnClick(card.id)}/>);
            })}
            </Row>
        </Container>
        <Footer/>
      </div>
    )
  }
}

export default App;
