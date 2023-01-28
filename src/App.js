import { ReactComponent as PigNose } from "./svg/pigNose.svg";
import './App.css';
import styled from "styled-components";
import Square from "./components/Square";

const MainWrapper = styled.div`
  header {
    position: fixed;
    width: 100%;
    background-image: linear-gradient(#202020, #282828);
    color: #C8C8C8;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    box-shadow: 5px 16px 5px rgba(68, 68, 68, 0.6);
  }

  font-family: "Trebuchet MS", Helvetica, sans-serif;
  button{
    border-radius: 20px;
    width: 6%;
    height: 30px;
    margin: 20px;
    cursor: pointer;
    transition: all 0.5s ease-out;
    box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
    &:hover{
      box-shadow: 5px 16px 5px rgba(68, 68, 68, 0.6);
      transform: translateY(-4px);
    }
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h4{
    margin-right: 10px;
  }
`;

function App() {
  return (
    <MainWrapper className="App">
      <header>
        <HeaderWrapper>
          <h4>Pig Game</h4>
          <PigNose />
        </HeaderWrapper>
      </header>
      <Square />
    </MainWrapper>
  );
}

export default App;
