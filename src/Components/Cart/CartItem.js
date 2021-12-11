import React, { useContext } from "react";
import "./CartItem.css";
import CartContext from "../store/cart-context";

const CartItem = (props) => {
  const ctx = useContext(CartContext);

  const handleAddFromCart = () => {
    ctx.addProduct({ name: props.name, price: props.price, id: props.id });
  };

  const handleDeletionFromCart = () => {
    ctx.deleteProduct({ name: props.name, price: props.price, id: props.id });
  };

  return (
    <React.Fragment>
      <div className="cart-items-">
        <div className="ïtems-information">
          <p className="ïtem-name">{props.name}</p>
          <p className="ïtem-price">{props.price}</p>
          <p className="item-quantity">{props.quantity}</p>
        </div>
        <div className="cart-buttons">
          <button className="plus-button-cart-item" onClick={handleAddFromCart}>
            +
          </button>
          <button
            className="-button-cart-item"
            onClick={handleDeletionFromCart}
          >
            -
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartItem;
