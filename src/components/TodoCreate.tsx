import React, { useState, CSSProperties } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch } from "./TodoContext";
import { nanoid } from "nanoid";

const TodoCreate = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const dispatch = useTodoDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", id: nanoid(), todo: value, done: false });
    setValue("");
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };
  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              onChange={onChangeHandler}
              value={value}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={() => setOpen(!open)} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
};

export default TodoCreate;

const CircleButton = styled.button<{ open: boolean }>`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;

  padding: 32px 32px 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;
