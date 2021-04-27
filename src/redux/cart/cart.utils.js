export const addItemTocart = (carItems, cartItemToAdd) => {
  const existingcartItem = carItems.find(
    (cartitem) => cartitem.id === cartItemToAdd.id
  );

  if (existingcartItem) {
    return carItems.map((cartitem) => {
      cartitem.id === cartItemToAdd.id
        ? {
            ...cartitem,
            quantity: cartitem.quantity + 1,
          }
        : cartitem;
    });
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
