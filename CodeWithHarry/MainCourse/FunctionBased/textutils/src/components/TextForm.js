import React from "react";

const TextForm = (props) => {
  return (
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="20"
          value={props.text}
          onChange={props.handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={props.handleUpClick}>
        Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={props.handleLoClick}>
        Lowercase
      </button>
      <button className="btn btn-primary mx-1" onClick={props.handleClClick}>
        Clear
      </button>
      <hr />
      <h2>Your text summary</h2>
      <p>
        {props.text.split(" ").length} words and {props.text.length} characters.<br />
        {props.text.split(" ").length * 0.008} minutes read.
      </p>
      <hr />
      <h2>Preview</h2>
      <p>{props.text}</p>
    </div>
  );
};

export default TextForm;
