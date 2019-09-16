import React from "react";
import Card from "components/card/Card";
import AllCards from "cards.json";
import styles from "./Word.module.css";

export default props => {
  const word = props.children.split("");
  return (
    <div className={styles.word}>
      {word.map((cardKey, i) => (
        <Card
          image={AllCards[cardKey].image}
          sound={AllCards[cardKey].sound}
          key={cardKey + i}
        ></Card>
      ))}
    </div>
  );
};
