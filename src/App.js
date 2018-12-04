import React, { Component } from "react";
import "./App.css";
import AppRouter from "./components/AppRouter";
class App extends Component {
  state = {
    fetched: false,
    products: []
  };

  initialState = async () => ({
    products: await (await fetch("data.json")).json(),
    fetched: true
  });

  async componentDidMount() {
    this.setState({
      ...(await this.initialState())
    });
  }

  render() {
    return <AppRouter />;
  }
}

export default App;
