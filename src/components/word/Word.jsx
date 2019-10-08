import React from "react";
import Card from "components/card/Card";
import AllCards from "cards.json";
import styles from "./Word.module.css";

function renderCard(cardKey, i) {
  const card = AllCards[cardKey];
  if (typeof card === "undefined") {
    console.warn("no card found for", cardKey);
    return;
  }
  return (
    <Card
      image={AllCards[cardKey].image}
      sound={AllCards[cardKey].sound}
      key={cardKey + i}
    ></Card>
  );
}

function splitWord(word) {
  const a = word.split("SCH");
  const result = a.reduce((acc, current, i) => {
    if (i < a.length - 1) {
      return acc.concat(...current.split(""), "SCH");
    } else {
      return acc.concat(...current.split(""));
    }
  }, []);
  return result;
}

export default props => {
  const word = splitWord(props.children);
  return (
    <div className={styles.word}>
      {word.map((cardKey, i) => renderCard(cardKey, i))}
    </div>
  );
};
