import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Player from "./Player";
import Controls from "./Controls";
import Dice from "./Dice";

const Wrapper = styled.div`
  height: 50%;
`;

const PlayerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  div.player-wrapper {
    width: 50%;
    height: 100%;
    box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
  }
`;

const PlayerOneWrapper = styled.div`
  border-radius: 10px 0 0 10px;
  background: linear-gradient(177.9deg, rgb(255, 228, 254) 5.3%, rgb(255, 228, 254) 5.3%, rgb(188, 132, 173) 94.7%);
`;

const PlayerTwoWrapper = styled.div`
  border-radius: 0 10px 10px 0;
  background: radial-gradient(circle at 10% 20%, rgb(248, 213, 214) 0%, rgb(243, 242, 229, 60%) 90%);
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(106.5deg, rgba(255, 215, 185, 0.91) 23%, rgba(223, 159, 247, 0.8) 93%);
`;

function Square(){
  const [isPlayerOneTurn, setIsPlayerOneTurn] = useState(true);
  const [playerOnePoints, setPlayerOnePoints] = useState(0);
  const [playerTwoPoints, setPlayerTwoPoints] = useState(0);
  const [isThereWInner, setIsThereWinner] = useState(false);

  const onRollDice = useCallback((diceResult) => {
    const executeStateFunction = isPlayerOneTurn
      ? setPlayerOnePoints : setPlayerTwoPoints;
    if ((playerOnePoints + diceResult) >= 20 || (playerTwoPoints + diceResult) >= 20) {
      setIsThereWinner(true);
    }
    if (diceResult === 1) {
      setIsPlayerOneTurn((prevStatus) => !prevStatus);
      executeStateFunction(0);
    } else {
      executeStateFunction((prevStatus) => prevStatus + diceResult);
    }
  }, [isPlayerOneTurn, playerOnePoints, playerTwoPoints]);

  const onHold = () => {
    setIsPlayerOneTurn((prevStatus) => !prevStatus);
  };

  const onNewGame = () => {
    setPlayerOnePoints(0);
    setPlayerTwoPoints(0);
    setIsPlayerOneTurn(true);
  };

  return (
    <MainWrapper>
      <div>
        <h1>{`Is player ${isPlayerOneTurn ? "One" : "Two"} turn`}</h1>
        <Controls
          onHold={onHold}
          onNewGame={onNewGame}
          onRollDice={onRollDice}
          isThereWInner={isThereWInner}
        />
      </div>
      <Wrapper>
        <PlayerWrapper>
          <PlayerOneWrapper className="player-wrapper">
            <Player
              {...(isThereWInner && isPlayerOneTurn && {
                isTheWinner: true
              })}
              name="Player 1"
              points={playerOnePoints}
            />
          </PlayerOneWrapper>
          <PlayerTwoWrapper className="player-wrapper">
            <Player
              {...(isThereWInner && !isPlayerOneTurn && {
                isTheWinner: true
              })}
              name="Player 2"
              points={playerTwoPoints}
            />
          </PlayerTwoWrapper>
        </PlayerWrapper>
        <Dice onRollDice={onRollDice} isThereWInner={isThereWInner} />
      </Wrapper>
    </MainWrapper>
  );
}

export default Square;
