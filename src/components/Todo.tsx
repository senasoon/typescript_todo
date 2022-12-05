import React from "react";
import Button from "./Button";
import { AiOutlineCheck } from "react-icons/ai";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
interface TodoProps {
  id: string;
  todo: string;
  done: boolean;
  key: string;
}

const Todo = ({ todo, done, id }: TodoProps) => {
  console.log(id);
  const doneTaskHandler = () => {};
  return (
    <TodoStyle>
      <TodoCheckContent>
        {!done && <Button className="work" onClick={doneTaskHandler} />}
        {done && (
          <Button className="work" onClick={doneTaskHandler}>
            <AiOutlineCheck />
          </Button>
        )}
        <Content>{todo}</Content>
      </TodoCheckContent>
      <RemoveButton>
        <FaTrash />
      </RemoveButton>
    </TodoStyle>
  );
};

export default Todo;

const TodoStyle = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    :last-child {
      display: none;
    }
  }
  &:hover {
    button {
      :last-child {
        display: block;
    }
  }
`;

const TodoCheckContent = styled.div`
  display: flex;
  align-items: center;
`;
const Content = styled.span`
  margin-left: 10px;
`;

const RemoveButton = styled.button`
  background-color: transparent;
  border: 0;
  color: #a9aeb4;
  cursor: pointer;
`;
