import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch } from "./TodoContext";
interface TodoProps {
  id: string;
  todo: string;
  done: boolean;
}

const Todo = ({ todo, done, id }: TodoProps) => {
  const dispatch = useTodoDispatch();

  const onRemove = (): void => {
    dispatch({ type: "DELETE_TODO", id: id });
  };

  const onToggle = (): void => {
    dispatch({ type: "TOGGLE_TODO", id: id, done: done });
  };
  return (
    <TodoItemBlock>
      <CheckButton done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckButton>
      <Text done={done}>{todo}</Text>
      <RemoveButton>
        <MdDelete onClick={onRemove} />
      </RemoveButton>
    </TodoItemBlock>
  );
};

export default Todo;

const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
  border: 0;
  background-color: transparent;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  &:hover {
    ${RemoveButton} {
      display: initial;
    }
  }
`;

const CheckButton = styled.button<{ done: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  background-color: transparent;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div<{ done: boolean }>`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;
