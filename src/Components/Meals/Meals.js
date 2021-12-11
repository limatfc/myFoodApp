import React from "react";

import MealItems from "./MealItems";
import "./Meals.css";

const Meals = (props) => {
  const Mock_meals = [
    {
      name: "Hot Dog Premium",
      price: 115.65,
      description:
        "Three sausages, mashed potato, corn, peas, tomato, ketchup, mustard, mayo, tomato sauce",
      id: 1,
    },
    {
      name: "Barbacue Mix",
      price: 140.87,
      description:
        "Includes salmon filet, chicken wings, picanha steak, rice, beans, french fries and salad ",
      id: 2,
    },
    {
      name: "House Hamburguer",
      price: 98.54,
      description:
        "Two hamburguers, tomato, lettuce, egg, bacon, ham, cheese, corn",
      id: 3,
    },
    {
      name: "Golden Pizza",
      price: 126.54,
      description:
        "Tomato sauce, bacon, ham, gorgonzola, boiled egg, olives, shrimp",
      id: 4,
    },
  ];

  return (
    <div className="meals">
      {Mock_meals.map((item) => (
        <MealItems
          name={item.name}
          price={item.price}
          description={item.description}
          key={item.id}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default Meals;
