import React, { useContext } from "react";
import "./HeaderButton.css";
import CartIcon from "./CartIcon";
import CartContext from "../store/cart-context";

const Button = (props) => {
  const ctx = useContext(CartContext);

  const clickHandler = (event) => {
    props.onClickHandler(event.target.value);
  };

  return (
    <button onClick={clickHandler} className="button-header">
      <span className="icon--button">
        <CartIcon />
      </span>
      <span className="label--button">Checkout Cart</span>
      <span className="items--button">{ctx.totalQuantityItems}</span>
    </button>
  );
};

export default Button;
