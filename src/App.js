import React, { Component } from "react";
import Header from "./components/header/Header";
import AccountActivation from "./components/accounts/AccountActivation";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
          <AccountActivation />
        </div>
      </div>
    );
  }
}

export default App;
