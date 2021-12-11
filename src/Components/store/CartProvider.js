import React, { useState, useEffect } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalQuantityItems, setTotalQuanttyItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addProduct = (individualItem) => {
    let selectedProduct = { ...individualItem };
    setItems((prevItems) => {
      let newProductList = [...prevItems];
      const index = newProductList.findIndex(
        (product) => product.id === selectedProduct.id
      );
      if (index === -1) {
        selectedProduct.quantity = 1;
      } else {
        selectedProduct.quantity = newProductList[index].quantity + 1;
        newProductList.splice(index, 1);
      }
      return [selectedProduct, ...newProductList];
    });
  };

  const itemsCartCount = () => {
    let finalQuantity = items.reduce(
      (total, product) => total + product.quantity,
      0
    );
    setTotalQuanttyItems(finalQuantity);
  };

  useEffect(itemsCartCount, [items]);

  const deleteProduct = (individualItem) => {
    let cloneditem = [...items];
    let index = items.findIndex((product) => product.id === individualItem.id);
    if (items[index].quantity > 1) {
      cloneditem[index].quantity = cloneditem[index].quantity - 1;
      setItems(cloneditem);
    } else if (items[index].quantity === 1) {
      cloneditem.splice(index, 1);
      setItems(cloneditem);
    }
  };

  const totalPriceCalculator = () => {
    let finalPrice = items.reduce(
      (total, product) => product.quantity * product.price + total,
      0
    );
    setTotalPrice(finalPrice.toFixed(2));
  };

  useEffect(totalPriceCalculator, [items]);

  const cartItems = {
    items,
    totalQuantityItems,
    totalPrice,
    addProduct: addProduct,
    deleteProduct: deleteProduct,
  };

  return (
    <CartContext.Provider value={cartItems}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
