import { connect } from "react-redux";
import Cart from "./Cart";

const mapStateToProps = state => ({
  cartItems: state.cart.items,
  products: state.products
});

export default connect(mapStateToProps)(Cart);
