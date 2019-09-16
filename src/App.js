import React from "react";
import Card from "components/card/Card";
import AllCards from "cards.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      {Object.keys(AllCards).map((cardKey, i) => (
        <Card
          image={AllCards[cardKey].image}
          sound={AllCards[cardKey].sound}
          key={cardKey + i}
        ></Card>
      ))}
    </div>
  );
}

export default App;
