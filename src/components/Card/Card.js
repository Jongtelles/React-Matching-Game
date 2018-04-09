import React from 'react';
import "./Card.css";

const Card = props => (
  <div className="card mx-auto">
        <img className="card-img img-fluid" onClick={props.onClick} key={props.id} id={props.id} src={props.image} data-clicked={props.data} alt=''/>
      </div>
);

export default Card;
