import React from "react";

function Controls({ onHold, onNewGame, isThereWInner }){
  return (
    <div>
      <button onClick={onHold} disabled={isThereWInner}>
        Hold
      </button>
      <button onClick={onNewGame}>
        New game
      </button>
    </div>
  );
}

export default Controls;
