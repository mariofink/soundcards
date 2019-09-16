import React from "react";
import styles from "./Card.module.css";

export default props => {
  const image = require(`images/${props.image}`);
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt="Card" />
      </div>
      <div className={styles.sound}>{props.sound}</div>
    </div>
  );
};
