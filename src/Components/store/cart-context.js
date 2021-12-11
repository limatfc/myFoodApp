import React from "react";

const CartContext = React.createContext({
  items: [],
  totalQuantityItems: 0,
  totalPrice: 0,
  addProduct: (item) => {},
  deleteProduct: (id) => {},
});

export default CartContext;
