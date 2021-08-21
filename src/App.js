import React from "react";
import TodoApp from "./components/TodoApp/TodoApp";
import { GlobalStyles, AppContainer } from "./App.style";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <TodoApp />
      </AppContainer>
    </>
  );
}

export default App;
