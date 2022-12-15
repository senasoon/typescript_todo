import React from "react";
import styled from "styled-components";
import { useTodoState } from "./TodoContext";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useTodoState();
  return (
    <TodoListBlock>
      {todos.length > 0 &&
        todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} todo={todo.todo} done={todo.done} />
        ))}
    </TodoListBlock>
  );
};

export default TodoList;

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px 48px 32px;
  overflow-y: auto;
`;
