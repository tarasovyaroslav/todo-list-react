import React from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';

const TodoItemStyled = styled.li`
  list-style: none;
  width: 100%;
  border-bottom: 1px solid lightgray;
  position: relative;
`;

const TodoContentStyled = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 15px;
  gap: 10px;
`;

const RemoveBtnStyled = styled(Button)`
  min-width: 8px;
  padding: 1px 6px;
`;

const TodoTextStyled = styled.span`
  ${({ checked }) =>
    checked &&
    css`
      text-decoration: line-through;
      color: gray;
    `}

  display: block;
  width: 100%;
  max-width: 75%;
  word-wrap: break-word;
`;

const TodoCheckedStyled = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  user-select: none;
`;

const CheckmarkStyled = styled.div`
  border-radius: 50%;
  width: 24px;
  height: 24px;
  border: 2px solid black;
  position: relative;
  flex-shrink: 0;

  &:before {
    content: '';
    position: absolute;
    display: none;
  }

  &:after {
    content: '';
    position: absolute;
    display: none;
  }

  ${({ checked }) =>
    checked &&
    css`
      background-color: rgb(0, 192, 0);
      border-color: rgb(0, 128, 0);
      &:after {
        display: block;
        left: 30%;
        top: 15%;
        width: 4px;
        height: 8px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
      }
    `}
`;

const TodoItem = ({ id, checkTodo, removeTodo, checked, text }) => {
  return (
    <TodoItemStyled>
      <TodoContentStyled>
        <TodoCheckedStyled
          type="checkbox"
          tabIndex="0"
          value={checked}
          onChange={() => checkTodo(id)}
        />

        <CheckmarkStyled checked={checked} />
        <TodoTextStyled checked={checked}>{text}</TodoTextStyled>
        <RemoveBtnStyled onClick={() => removeTodo(id)}>
          X
        </RemoveBtnStyled>
      </TodoContentStyled>
    </TodoItemStyled>
  );
};

export default TodoItem;
