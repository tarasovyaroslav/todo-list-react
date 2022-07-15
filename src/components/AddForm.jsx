import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './Button';

const AddFormStyled = styled.form`
  display: flex;
  box-shadow: 1px 1px 15px lightgray;
  width: 100%;
  padding: 10px;
  height: 50px;
  margin-bottom: 15px;
`;

const AddInputStyled = styled.input`
  outline: none;
  border: none;
  font-size: 1.25rem;
  width: 100%;
`;

const AddForm = ({ todos, addTodo }) => {
  const [todoText, setTodoText] = useState('');

  return (
    <AddFormStyled
      onSubmit={(e) => {
        e.preventDefault();
        const id = Date.now();
        const todo = {
          id: id,
          text: todoText,
          checked: false,
        };
        addTodo(todo);
        setTodoText('');
      }}
    >
      <AddInputStyled
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="What you should to do?"
        type="text"
        value={todoText}
      />
      <Button tabIndex="0">Add</Button>
    </AddFormStyled>
  );
};

export default AddForm;
