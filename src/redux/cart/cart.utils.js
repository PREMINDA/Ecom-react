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
