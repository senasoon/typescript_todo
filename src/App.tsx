import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Button from "./components/Button";
import Todo from "./components/Todo";

function App() {
  const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e9ecf0;
  }
`;
  const [openTodoInput, setOpenTodoInput] = useState<boolean>(false);
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTask(event.target.value);
  };

  const onAddHandler = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter" && event.nativeEvent.isComposing === false) {
      event.preventDefault();
      setTodoList([...todoList, task]);
      setTask("");
    }
  };

  return (
    <>
      <GlobalStyle />
      <Box>
        <Info className="info">
          <DateBox className="date-box">
            <Date className="date">2022년 11월 28일</Date>
            <Day className="day">화요일</Day>
          </DateBox>
          <Remainder className="remainder">할 일 2개 남음</Remainder>
        </Info>
        <TodoList className="todo-list">
          {todoList && todoList.map((todo) => <Todo todo={todo} />)}
        </TodoList>
        <InputBox className="input-box" bgColor={openTodoInput}>
          {openTodoInput && (
            <Input
              value={task}
              className="input"
              placeholder="할 일을 입력 후, Enter를 눌러주세요."
              onChange={onChangeHandler}
              onKeyDown={onAddHandler}
            />
          )}
        </InputBox>

        {!openTodoInput && (
          <Button className="add" onClick={() => setOpenTodoInput(true)}>
            +
          </Button>
        )}
        {openTodoInput && (
          <Button className="close" onClick={() => setOpenTodoInput(false)}>
            +
          </Button>
        )}
      </Box>
    </>
  );
}

export default App;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 400px;
  height: 600px;
  margin: 60px auto auto;
  position: relative;
  border-radius: 20px;
`;

const Info = styled.div`
  flex: 30%;
  border-bottom: 1px solid #e9ecf0;
  padding: 10px 20px;
`;

const DateBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
`;

const Date = styled.span`
  font-size: 30px;
  font-weight: 700;
`;

const Day = styled.span`
  font-size: 16px;
  color: #a9aeb4;
`;

const Remainder = styled.span`
  font-size: 14px;
  color: #2edaa6;
`;

const TodoList = styled.div`
  flex: 70%;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div<{ bgColor: boolean }>`
  width: full;
  height: 100px;
  background-color: ${(props) => (props.bgColor ? "#f8f9fa" : "#fff")};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: start;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  border: 1px solid #dfe3e7;
  padding: 0 5px;

  &:focus {
    outline: 0;
  }
`;
