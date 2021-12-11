import React from "react";
import "./MealItems.css";
import AddItemButton from "../Button/AddItemButton";

const MealItems = (props) => {
  return (
    <section className="meal-items">
      <p className="name">{props.name}</p>
      <p className="description">{props.description}</p>
      <p className="price">{props.price}</p>
      <AddItemButton name={props.name} price={props.price} id={props.id} />
    </section>
  );
};

export default MealItems;
