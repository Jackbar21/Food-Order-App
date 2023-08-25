import React from "react";
import styles from "./AvailableMeals.module.css";
import mealsData from "../../../data/mealsData";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem/MealItem";

const AvailableMeals = (props) => {
  const mealsList = mealsData.map(({ id, name, price, description }) => (
    <MealItem
      key={id}
      id={id}
      name={name}
      price={price}
      description={description}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
