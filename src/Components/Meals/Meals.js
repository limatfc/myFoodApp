import React, { useEffect, useState } from "react";
import useHttp from "../../Hooks/use-http";
import MealItems from "./MealItems";
import "./Meals.css";

const Meals = () => {
  const [mockMeals, setMockMeals] = useState([]);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    const transformMeals = (mealsObj) => {
      for (const mealItem in mealsObj) {
        let data = mealsObj[mealItem].map((item) => {
          return {
            id: item.id,
            name: item.name,
            price: item.price,
            description: item.description,
          };
        });
        setMockMeals(data);
      }
    };

    fetchMeals(
      {
        url: "https://orderfoodapp-be86f-default-rtdb.europe-west1.firebasedatabase.app/foodapp.json",
      },
      transformMeals
    );
  }, [fetchMeals]);

  return (
    <div className="meal-items">
      <MealItems mockMeals={mockMeals} isLoading={isLoading} error={error} />
    </div>
  );
};

export default Meals;
