import React, { useState } from "react";
import mealsImg from "../../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        {/* <button>Cart</button> */}
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="A table full of delicious food :P" />
      </div>
    </>
  );
};

export default Header;
