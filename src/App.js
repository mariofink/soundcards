import React, { useState } from "react";
import Word from "components/word/Word";
import allWords from "./words.json";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);

  function nextWord() {
    if (index === allWords.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <div className="App">
      <Word sounds={allWords[index].sounds} />
      <button onClick={nextWord}>Nächstes Wort</button>
    </div>
  );
}

export default App;
