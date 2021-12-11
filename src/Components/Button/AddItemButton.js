import React, { useContext } from "react";
import "./AddItemButton.css";
import CartContext from "../store/cart-context";

const AddItemButton = (props) => {
  const { addProduct } = useContext(CartContext);
  const ctx = useContext(CartContext);

  const handleClick = (event) => {
    addProduct({
      name: props.name,
      price: props.price,
      id: props.id,
    });

    // console.log(event.target.value);
    // console.log(props.name, props.price);
    // console.log("aa", items);
  };

  return (
    <button onClick={handleClick} className="button-add-item">
      +1
    </button>
  );
};

export default AddItemButton;
