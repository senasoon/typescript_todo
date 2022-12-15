import React from "react";
import { createGlobalStyle } from "styled-components";
import { TodoProvider } from "./components/TodoContext";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

function App() {
  const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e9ecf0;
  }
`;

  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
