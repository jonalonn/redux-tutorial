import React, { Component } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Welcome from "./components/Welcome";
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
    return (
      <div className="App">
        <Welcome />
        <div className="ShopContainer">
          <ProductList />
          <Cart />
        </div>
      </div>
    );
  }
}

export default App;
