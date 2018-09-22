import React, { Component } from "react";
import Header from "./components/header/Header";
import AccountActivation from "./components/pages/AccountActivation";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <AccountActivation />
      </div>
    );
  }
}

export default App;
