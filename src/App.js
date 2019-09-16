import React from "react";
import Word from "components/word/Word";
import AllCards from "cards.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Word>OPA</Word>
      <Word>
        {Object.keys(AllCards)
          .join("")
          .toUpperCase()}
      </Word>
    </div>
  );
}

export default App;
