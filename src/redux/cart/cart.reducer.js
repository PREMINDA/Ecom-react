import CartActionTypes from "./cart.types";

const INITAIL_STATE = {
  hidden: true,
};

const cartReduser = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return INITAIL_STATE;
  }
};

export default cartReduser;
