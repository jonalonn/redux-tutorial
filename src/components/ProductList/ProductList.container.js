import { connect } from "react-redux";
import { addItemToCart } from "../../actions";
import ProductList from "./ProductList";

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  addItemToCart: id => {
    dispatch(addItemToCart(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
