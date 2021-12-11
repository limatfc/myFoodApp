import React from "react";
import Modal from "./Modal";
import "./Cart.css";
import CartItem from "./CartItem";
import CartContext from "../store/cart-context";
import { useContext } from "react";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const closeCartHandler = () => {
    props.onCloseCart();
  };

  const orderedItems = ctx.items.sort((a, b) => {
    return b.name < a.name ? 1 : -1;
  });

  return (
    <Modal closeCart={closeCartHandler}>
      <div className="cart-overlayer">
        <header className="cart-header">Your cart</header>
        {ctx.items.length === 0 && (
          <h5 className="cart-lable">
            Sorry, your cart is empty. Have you tried clicking on the{" "}
            <span className="enlarge"> PLUS (+) </span>
            sign in our menu?
          </h5>
        )}
        {orderedItems.map((item) => (
          <CartItem
            name={item.name}
            price={item.price}
            key={item.id}
            id={item.id}
            quantity={item.quantity}
          />
        ))}
        {ctx.totalPrice > 0 && (
          <div className="total-price-cart">
            <span>Total Price</span>
            {ctx.totalPrice}
          </div>
        )}
        <div className="cart-buttons-buttom">
          <button className="close-cart-button" onClick={closeCartHandler}>
            Close
          </button>
          {ctx.totalPrice > 0 && (
            <button className="order-cart-button">Order</button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
