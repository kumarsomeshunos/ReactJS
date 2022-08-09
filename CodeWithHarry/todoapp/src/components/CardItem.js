import React from "react";
import Poster from "../assets/logo512.png";

const CardItem = (props) => {
  let CardItemStyle = {
    width: "18rem",
    margin: "1rem",
  };
  return (
    <div>
      <div className="card" style={CardItemStyle}>
        <img src={Poster} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.todo.title}</h5>
          <p className="card-text">{props.todo.body}</p>
          <a
            href="#"
            className="btn btn-danger"
            onClick={() => {
              props.onDelete(props.todo);
            }}
          >
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
