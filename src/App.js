import React from "react";
import Card from "components/card/Card";
import AllCards from "cards.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      {AllCards.map((card, i) => (
        <Card image={card.image} sound={card.sound} key={card.sound + i}></Card>
      ))}
    </div>
  );
}

export default App;
