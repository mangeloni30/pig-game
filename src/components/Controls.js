import React, { useState } from "react";

function Controls({ status = 1, onRollDice, onHold, onNewGame }){
  const [diceStatus, setDiceStatus] = useState(0);
  return (
    <div>
      <button onClick={
        () => {
          const diceRolled = Math.floor(Math.random() * 6) + 1;
          onRollDice(diceRolled);
          setDiceStatus(diceRolled);
        }}
      >
        Roll Dice
      </button>
      <button onClick={onHold}>
        Hold
      </button>
      <button onClick={onNewGame}>
        New game
      </button>
      <div>
        Dice result
        <div>
          {diceStatus}
        </div>
      </div>
    </div>
  );
}

export default Controls;
