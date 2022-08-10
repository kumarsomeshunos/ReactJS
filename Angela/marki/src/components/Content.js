import React from "react";

const Content = (props) => {
  let ContentStyle = {
    marginTop: "1%",
    borderRadius: "20px",
    width: "50vw",
    margin: "auto",
    backgroundColor: "wheat",
    fontSize: "2000%",
  };
  return <div style={ContentStyle}>{props.data}</div>;
};

export default Content;
