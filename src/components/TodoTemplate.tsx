import React from "react";
import styled from "styled-components";

type TodoTemplateProps = {
  children: React.ReactNode;
};

const TodoTemplate = ({ children }: TodoTemplateProps) => {
  return <TodoTemplateLayout>{children}</TodoTemplateLayout>;
};

export default TodoTemplate;

const TodoTemplateLayout = styled.div`
  width: 512px;
  height: 768px;
  position: relative;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 96px auto 32px auto;
  display: flex;
  flex-direction: column;
`;
