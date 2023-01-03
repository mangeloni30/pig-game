import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;

  .container{
    width: 400px;
    margin: 0 auto;
  }
  .dice{
    background-color: #ffff;
    border: solid 3px #aaa;
    border-radius: 3px;
    display: block;
    width: 100px;
    height: 100px;
    margin: 7px auto;
    box-sizing: border-box;
    padding: 10px;
    position: relative;
    
    .dot{
      border-radius: 50%;
      position: absolute;
      width: 15px;
      height: 15px;
      background: #000;
    }
  }
  
  .dice1{
    .dot{
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
    }
  }
  
  .dice2{
    .dot{
      &:first-child{
        top: 20px;
        left: 20px;
      }
      &:last-child{
        bottom: 20px;
        right: 20px;
      }
    }
  }
  
  .dice3{
    .dot{
      &:first-child{
        top: 15px;
        left: 15px;
      }
      &:nth-child(2){
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
      }
      &:last-child{
        bottom: 15px;
        right: 15px;
      }
    }
  }
  
  .dice4{
    .dot{  
      &:first-child{
        top: 15px;
        left: 15px;
      }
      &:nth-child(2){
        top: 15px;
        right: 15px;
      }
      &:nth-child(3){
        bottom: 15px;
        left: 15px;
      }
      &:last-child{
        bottom: 15px;
        right: 15px;
      }
     }
  }
  
  .dice5{
    .dot{  
      &:first-child{
        top: 15px;
        left: 15px;
      }
      &:nth-child(2){
        top: 15px;
        right: 15px;
      }
      &:nth-child(3){
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
      }
      &:nth-child(4){
        bottom: 15px;
        left: 15px;
      }
      &:last-child{
        bottom: 15px;
        right: 15px;
      }
    }
  }
  
  .dice6{
    .dot{  
      &:first-child{
        top: 15px;
        left: 15px;
      }
      &:nth-child(2){
        top: 15px;
        right: 15px;
      }
      &:nth-child(3){
        top: 0;
        bottom: 0;
        left: 15px;
        margin: auto;
      }
      &:nth-child(4){
        top: 0;
        right: 15px;
        bottom: 0;
        margin: auto;
      }
      &:nth-child(5){
        bottom: 15px;
        left: 15px;
      }
      &:last-child{
        bottom: 15px;
        right: 15px;
      }
    }
  }

  button{
    margin-top: 30px;
  }
`;

function Dice2({ onRollDice }){
  const [diceResult, setDiceResult] = useState();
  const [dotsToShow, setDotsToShow] = useState([]);
  function rollDice() {
    const diceRolled = Math.floor(Math.random() * 6) + 1;
    setDiceResult(diceRolled);
    onRollDice(diceRolled);
  }

  useEffect(() => {
    const pointsForDice = [];
    for (let i = 0; i < diceResult; i++) {
      pointsForDice.push(i);
    }
    setDotsToShow(pointsForDice);
  }, [diceResult]);

  return (
    <Wrapper>
      <div className="container">
        <div className={`dice dice${dotsToShow.length}`}>
          {
            dotsToShow.map(
              () => (<div className="dot"></div>)
            )
          }
        </div>
      </div>
      <button
        id="roll-button"
        onClick={rollDice}
      >
        Roll Dice
      </button>
    </Wrapper>
  );
}

export default Dice2;
