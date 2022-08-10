import React from "react";

const Button = (props) => {
  return (
    <div>
      {props.content === "Plus" ? (
        <button
          className="btn btn-danger btn-lg m-1"
          type="button"
          onClick={props.onClick}
        >
          {props.content}
        </button>
      ) : (
        <button
          className="btn btn-warning btn-lg m-1"
          type="button"
          onClick={props.onClick}
        >
          {props.content}
        </button>
      )}
    </div>
  );
};

export default Button;
