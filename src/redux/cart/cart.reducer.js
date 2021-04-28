import CartActionTypes from "./cart.types";
import { addItemTocart } from "./cart.utils";

const INITAIL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReduser = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemTocart(state.cartItems, action.payload),
      };
    default:
      return INITAIL_STATE;
  }
};

export default cartReduser;
