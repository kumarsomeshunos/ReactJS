import React from 'react'
import Poster from '../assets/logo512.png'

const CardItem = () => {
    let CardItemStyle = {
      width: "18rem",
      margin: "1rem"
    };
  return (
    <div>
      <div className="card" style={CardItemStyle}>
        <img src={Poster} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-danger">
            Delete
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardItem