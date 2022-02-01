import React from "react";

const RestartComponent = (props: { onClick: () => void }) => {
  return <button onClick={props.onClick}>Click here to Restart Game</button>;
};

export default RestartComponent;
