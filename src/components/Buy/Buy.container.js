import { connect } from "react-redux";
import Buy from "./Buy";
import { addItemToCart } from "../../actions";

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addItemToCart: e =>
    dispatch(addItemToCart(parseInt(e.currentTarget.dataset.productId, 10)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buy);
