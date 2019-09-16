import React from "react";

export default props => {
  const image = require(`images/${props.image}`);
  return (
    <div>
      <div>
        <img src={image} alt="Card" />
      </div>
      <div>{props.sound}</div>
    </div>
  );
};
