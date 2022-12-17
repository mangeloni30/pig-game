import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  height: 80%;
  background: linear-gradient(135deg, orange 60%, cyan);
  position: absolute;
  border-radius: 10px;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;

  margin: auto;
`;

const PlayerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  div {
    width: 50%;
    height: 100%;
  }
`;

const PlayerOneWrapper = styled.div`
  border-radius: 10px 0 0 10px;
  background: #D8BFD8;
`;

const PlayerTwoWrapper = styled.div`
  border-radius: 0 10px 10px 0;
  background: #E0BFB8;
`;

function Square(){
  return (
    <Wrapper>
      <PlayerWrapper>
        <PlayerOneWrapper />
        <PlayerTwoWrapper />
      </PlayerWrapper>
    </Wrapper>
  );
}

export default Square;
