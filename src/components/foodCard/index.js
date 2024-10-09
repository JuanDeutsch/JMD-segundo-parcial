import React from "react";

import { useNavigate } from "react-router-dom";
import "./index.css";

const FoodCard = ({ meal }) => {
  console.log(meal);
  const navigate = useNavigate();

  const handleFoodClick = () => {
    navigate(`/detail/${meal.idMeal}`);
  };

  return (
    <div className="food-card" onClick={handleFoodClick}>
      <div
      data-testid="imagen"
        id="imagen"
        style={{ backgroundImage: `url(${meal.strMealThumb})`, }}
      ></div>
      <span className="meal-name">{meal.strMeal}</span>
    </div>
  );
};

export default FoodCard;
