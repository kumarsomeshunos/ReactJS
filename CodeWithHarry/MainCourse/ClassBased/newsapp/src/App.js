import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

import PropTypes from "prop-types";
import React, { Component } from "react";
import News from "./components/News";

export class App extends Component {
  x = "Well well well...";
  onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
  };

  render() {
    console.log(process.env.REACT_API_KEY)
    return (
      <>
        <Navbar onSubmit={this.onSubmit} />
        <News key={process.env.REACT_API_KEY}/>
        {/* <div>This is the main thing... {this.x}</div> */}
      </>
    );
  }
}

export default App;
