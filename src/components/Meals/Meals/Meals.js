import React from "react";
import styles from "./Meals.module.css";

import MealsSummary from "../MealsSummary/MealsSummary";
import AvailableMeals from "../AvailableMeals/AvailableMeals";

const Meals = (props) => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default Meals;
