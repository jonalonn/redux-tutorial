import { ADD_ITEM_TO_CART } from "./actionTypes";

export const addItemToCart = id => ({
  type: ADD_ITEM_TO_CART,
  id
});
