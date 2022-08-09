import React from "react";
import CardItem from "./CardItem";

const Cards = (props) => {
  let CardsStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "Center",
  };
  return (
    <div style={CardsStyle}>
      {props.todos.map((todo) => {
        if(!todo) return console.log("This is empty")
        return <CardItem onDelete={props.onDelete} key={todo.sno} todo={todo} />;
      })}
    </div>
  );
};

export default Cards;
