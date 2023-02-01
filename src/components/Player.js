import React from "react";
import styled from "styled-components";
import Points from "./Points";

const TitleWrapper = styled.div`
  width: 100%;
  .player-winner{
    animation: winner 2s infinite;
  }
  @keyframes winner {
    from {
      transform: scale(1.0);
    }
    to {
        transform: scale(1.5);
    }
  }
`;

function Player({ name, points, isTheWinner = false }){
  return (
    <>
      <TitleWrapper>
        <h2 {...isTheWinner && { className: "player-winner" } }>
          {`${name} ${isTheWinner ? "is the winner!!!" : ""}`}
        </h2>
      </TitleWrapper>
      <div>
        <Points points={points} />
      </div>
    </>
  );
}

export default Player;
