import styled from "styled-components";
import "./App.css";
import Page from "./components/page";

const TodoStylingContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Page title="Homepage">
      <TodoStylingContainer>
        <h1>My Todos</h1>
      </TodoStylingContainer>
    </Page>
  );
}

export default App;
