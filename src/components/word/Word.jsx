import React from "react";
import Card from "components/card/Card";
import AllCards from "cards.json";
import styles from "./Word.module.css";

function renderCard(cardKey, i) {
  const card = AllCards[cardKey];
  if (typeof card === "undefined") {
    console.warn("no card found for", cardKey)
    return;
  }
  return (
    <Card
      image={AllCards[cardKey].image}
      sound={AllCards[cardKey].sound}
      key={cardKey + i}
    ></Card>
  )
}

export default props => {
  const word = props.children.split("");
  return (
    <div className={styles.word}>
      {word.map((cardKey, i) => (
        renderCard(cardKey, i)
      ))}
    </div>
  );
};
