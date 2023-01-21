import './App.css';
import styled from "styled-components";
import Square from "./components/Square";

const MainWrapper = styled.div`
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  button{
    border-radius: 20px;
    width: 5%;
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

function App() {
  return (
    <MainWrapper className="App">
      <header>
        Pig Game
      </header>
      <Square />
    </MainWrapper>
  );
}

export default App;
