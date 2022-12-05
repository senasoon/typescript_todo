import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  children?: React.ReactNode;
  className: "add" | "close" | "work" | "done";
  onClick: () => void;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <CustomButton className={className} onClick={onClick}>
      {children}
    </CustomButton>
  );
};

export default Button;

const CustomButton = styled.button<ButtonProps>`
  ${(props) =>
    props.className === "add"
      ? css`
          width: 50px;
          height: 50px;
          border: 0;
          border-radius: 100%;
          position: absolute;
          bottom: -25px;
          right: 175px;
          background-color: #2edaa6;
          font-size: 40px;
          color: #fff;
          cursor: pointer;
          &:active {
            background-color: #ff8786;
            transition: 0.125s all ease-in;
            transform: rotate(45deg);
          }
        `
      : props.className === "close"
      ? css`
          width: 50px;
          height: 50px;
          border: 0;
          border-radius: 100%;
          position: absolute;
          bottom: -25px;
          right: 175px;
          background-color: #ff8786;
          font-size: 40px;
          color: #fff;
          cursor: pointer;
          transform: rotate(45deg);
        `
      : props.className === "work"
      ? css`
          width: 30px;
          height: 30px;
          border-radius: 100%;
          background-color: transparent;
          border: 1px solid #dfe3e7;
          cursor: pointer;
        `
      : null}
`;
