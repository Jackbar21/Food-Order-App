import React from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "../MealItemForm/MealItemForm";

const MealItem = (props) => {
  const { id, name, description, price } = props;

  return (
    <>
      <li className={styles.meal}>
        <div>
          <h3>{name}</h3>
          <div className={styles.description}>{description}</div>
          <div className={styles.price}>{`$${price.toFixed(2)}`}</div>
        </div>
        <div>
          <MealItemForm id={id} />
        </div>
      </li>
    </>
  );
};

export default MealItem;
