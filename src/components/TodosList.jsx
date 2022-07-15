import React from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';

const TodosListStyled = styled.ul`
  width: 100%;
  border-radius: 5px;
  box-shadow: 1px 1px 15px lightgray;
  overflow-y: scroll;
  height: 600px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: lightgray;
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    border-radius: 3px;
  }
`;

const TodosList = ({ filter, todos, checkTodo, removeTodo }) => {
  return (
    <TodosListStyled>
      {todos
        .filter((todo) => {
          switch (filter) {
            case 'completed':
              return todo.checked;
            case 'uncompleted':
              return !todo.checked;
            default:
              return true;
          }
        })
        .map(({ id, text, checked }) => (
          <TodoItem
            id={id}
            key={id}
            checkTodo={checkTodo}
            checked={checked}
            text={text}
            removeTodo={removeTodo}
          />
        ))}
    </TodosListStyled>
  );
};

export default TodosList;
