export const addItemTocart = (cartItems, cartItemToAdd) => {
  const existingcartItem = cartItems.find(
    (cartitem) => cartitem.id === cartItemToAdd.id
  );

  if (existingcartItem) {
    return cartItems.map((cartitem) =>
      cartitem.id === cartItemToAdd.id
        ? {
            ...cartitem,
            quantity: cartitem.quantity + 1,
          }
        : cartitem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const reduseitem = (cartItems, cartItemReduseTo) => {
  const existingItem = cartItems.find(
    (cartitem) => cartitem.id === cartItemReduseTo.id
  );
  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemReduseTo.id);
  }
  return cartItems.map((cartitem) =>
    cartitem.id === cartItemReduseTo.id
      ? {
          ...cartitem,
          quantity: cartitem.quantity - 1,
        }
      : cartitem
  );
};
