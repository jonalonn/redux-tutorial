import { ADD_ITEM_TO_CART } from "../actions/actionTypes";

const cart = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return { ...state, items: [...state.items, action.id] };
    default:
      return state;
  }
};

export default cart;
