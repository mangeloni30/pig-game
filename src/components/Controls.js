import React from "react";

function Controls({ onHold, onNewGame }){
  return (
    <div>
      <button onClick={onHold}>
        Hold
      </button>
      <button onClick={onNewGame}>
        New game
      </button>
    </div>
  );
}

export default Controls;
