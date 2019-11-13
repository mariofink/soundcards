import React, { useState } from "react";
import Word from "components/word/Word";
import "./App.css";

function App() {
  const [input, setInput] = useState("OMA");
  return (
    <div className="App">
      <input
        className="sound-input"
        type="text"
        value={input}
        onChange={e => setInput(e.target.value.toUpperCase())}
      ></input>
      <Word>{input}</Word>
    </div>
  );
}

export default App;
