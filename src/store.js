import { createStore } from "redux";
import rootReducer from "./reducers";
import { products } from "./mockData";

const initialState = {
  products,
  cart: {
    items: []
  }
};

export const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
