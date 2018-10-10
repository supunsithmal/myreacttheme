import React, { Component } from "react";

import "./scss/app.css";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <h1>header</h1>
        </div>
        <div className="sidebar">sidebar</div>
        <div className="content">content</div>
      </div>
    );
  }
}

export default App;
