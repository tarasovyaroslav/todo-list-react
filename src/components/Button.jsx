import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background: white;
  outline: none;
  border: 1px solid black;
  border-radius: 5px;
  height: 100%;
  min-width: 50px;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  &:focus {
    border: 2px solid black;
  }
`;

const Button = ({ children, ...otherProps }) => {
  return <ButtonStyled {...otherProps}>{children}</ButtonStyled>;
};

export default Button;
