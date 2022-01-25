import React from "react";
import "./MealItems.css";
import AddItemButton from "../Button/AddItemButton";

const MealItems = (props) => {
  let mealMessage = (
    <h2>
      Sorry, it seems like this restaurant hasn't updated its list. Please try
      and contact them.
    </h2>
  );

  if (props.mockMeals.length > 0) {
    mealMessage = props.mockMeals.map((item) => {
      return (
        <div key={item.id} className="meals">
          <p className="name">{item.name}</p>
          <p className="description">{item.description}</p>
          <p className="price">${item.price}</p>
          <AddItemButton name={item.name} price={item.price} id={item.id} />
        </div>
      );
    });
  }

  if (props.error) {
    mealMessage = <p>Oops, it seems like your request didn't work.</p>;
  }

  if (props.loading) {
    mealMessage = <h1>Loading, please wait.</h1>;
  }

  return <React.Fragment>{mealMessage}</React.Fragment>;
};

export default MealItems;
