import React from "react";
import { useState } from "react";

const AddTodo = (props) => {
  let AddToDoStyle = {};
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !body) {
      alert("Title or body must not be empty!");
    }
    props.onAdd(title, body);
  };
  return (
    <div style={AddToDoStyle} className="container">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">To Do</label>
          <textarea
            className="form-control"
            rows="4"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="To Do"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
