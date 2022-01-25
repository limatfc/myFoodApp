import React, { useState } from "react";
import Modal from "./Modal";
import "./Cart.css";
import CartItem from "./CartItem";
import CartContext from "../store/cart-context";
import { useContext } from "react";
import CartForm from "./CartForm";
import react from "react";

const Cart = (props) => {
  const [orderIsComplete, setOrderIsComplete] = useState(false);

  const ctx = useContext(CartContext);

  const closeCartHandler = () => {
    props.onCloseCart();
  };

  const orderedItems = ctx.items.sort((a, b) => {
    return b.name < a.name ? 1 : -1;
  });

  const orderIsCompleteHandler = () => {
    setOrderIsComplete(!orderIsComplete);
  };

  return (
    <React.Fragment>
      {!orderIsComplete && (
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
                {`$${ctx.totalPrice}`}
              </div>
            )}
            <div className="cart-buttons-buttom">
              <button className="close-cart-button" onClick={closeCartHandler}>
                Close
              </button>
              {ctx.totalPrice > 0 && (
                <button
                  onClick={orderIsCompleteHandler}
                  className="order-cart-button"
                >
                  Order
                </button>
              )}
            </div>
          </div>
        </Modal>
      )}
      {orderIsComplete && (
        <Modal closeCart={closeCartHandler}>
          <CartForm items={orderedItems} totalPrice={ctx.totalPrice} />
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Cart;
