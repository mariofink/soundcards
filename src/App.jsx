import React, { useState } from "react";
import Word from "components/word/Word";
import allWords from "./words.json";
import "./App.css";

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const [index, setIndex] = useState(0);

  function nextWord() {
    if (index === allWords.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function previousWord() {
    if (index === 0) {
      setIndex(allWords.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function randomWord() {
    setIndex(getRandomInt(0, allWords.length - 1));
  }

  return (
    <div className="App">
      <Word sounds={allWords[index].sounds} />
      <button onClick={previousWord}>Vorheriges Wort</button>
      <button onClick={randomWord}>ZUFALL!</button>
      <button onClick={nextWord}>Nächstes Wort</button>
    </div>
  );
}

export default App;
