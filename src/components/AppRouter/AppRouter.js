import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductList from "../ProductList";
import Cart from "../Cart";
import Welcome from "../Welcome";

const AppRouter = () => (
  <Router>
    <div>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
        <hr />
      </div>

      <div>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/shop" component={ProductList} />
        <Route path="/cart" component={Cart} />
      </div>
    </div>
  </Router>
);

export default AppRouter;
