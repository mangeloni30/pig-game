import React from "react";
import styled from "styled-components";
import Points from "./Points";

const TitleWrapper = styled.div`
  width: 100%;
`;

function Player({ name, points }){
  return (
    <>
      <TitleWrapper>
        <h2>
          {name}
        </h2>
      </TitleWrapper>
      <div>
        <Points points={points} />
      </div>
    </>
  );
}

export default Player;
