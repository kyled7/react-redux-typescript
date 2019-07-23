import React, { Component } from "react";
import Routes from "./AppRoutes";
import "./App.css";
import Header from "../../Components/Header";

class App extends Component {
  private menuItems = [
    {
      title: "Example",
      href: "/example"
    }
  ];

  render() {
    return (
      <div className="App">
        <Header pageTitle="React Boilerplate" menuItems={this.menuItems} />
        <Routes />
      </div>
    );
  }
}

export default App;
