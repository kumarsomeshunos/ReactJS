import React from "react";

const Content = (props) => {
  let ContentStyle = {
    width: "70vw",
    margin: "auto",
    padding: "1%",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor: "wheat",
  };
  return (
    <div style={ContentStyle}>
      <h1 style={{ fontSize: "450%", padding: "20px" }}>{props.data}</h1>
      <button
        type="button"
        className="btn btn-lg btn-danger"
        onClick={props.onClick}
      >
        Refresh
      </button>
    </div>
  );
};

export default Content;
