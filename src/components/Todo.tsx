import React from "react";
import Button from "./Button";
import { AiOutlineCheck } from "react-icons/ai";
import styled from "styled-components";

interface TodoProps {
  todo: string;
}

const Todo = ({ todo }: TodoProps) => {
  const doneTaskHandler = () => {};
  return (
    <TodoStyle>
      <Button className="work" onClick={doneTaskHandler}>
        <AiOutlineCheck />
      </Button>
      <span>{todo}</span>
    </TodoStyle>
  );
};

export default Todo;

const TodoStyle = styled.div`
  margin-bottom: 20px;
`;
