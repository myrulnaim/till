import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import NewMessageForm from "./NewMessageForm";
import { results } from "./api";

class App extends Component {
  componentDidMount() {
    results();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            Till + Manifold ={" "}
            <span role="img" aria-label="love">
              😍
            </span>
          </h2>
        </div>
        <p className="App-intro">Till it like it is!</p>
        <NewMessageForm />
      </div>
    );
  }
}

export default App;
