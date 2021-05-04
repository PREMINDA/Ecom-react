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
  return cartItems.map((cartitem) =>
    cartitem.id === cartItemReduseTo.id
      ? {
          ...cartitem,
          quantity: cartitem.quantity - 1,
        }
      : cartitem
  );
};
