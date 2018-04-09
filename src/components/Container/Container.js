import React, {Component} from 'react';
import Card from "../Card";
import "./Container.css";

class Container extends Component{
  state = {
matched: false,
cards: []
  };

  componentDidMount() {
    this.cardMaker();
    console.log(this.state);
  }

  cardMaker = () =>{
    const imageArr = ['./images/placeholder.jpeg','./images/placeholder.jpeg','./images/placeholder.jpeg','./images/placeholder.jpeg','./images/placeholder.jpeg','./images/placeholder.jpeg','./images/placeholder.jpeg','./images/placeholder.jpeg','./images/placeholder.jpeg','./images/placeholder.jpeg','./images/placeholder.jpeg','./images/placeholder.jpeg'];


    const imgCards = [];
for (let i = 0; i < imageArr.length; i++){
imgCards.push(<Card image={imageArr[i]} key={i} id={i} data-clicked={false} onClick={this.handleOnClick()} />)
}
  console.log(imageArr);
  console.log(imgCards);
  this.setState({cards: imgCards});
}

handleOnClick = () =>{

}

render() {
  return (
    <div className="container">
    <div className='row mx-auto'>
{this.state.cards}
</div>
    </div>
  )
}
}

export default Container;
