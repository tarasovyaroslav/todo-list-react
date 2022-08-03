import React from 'react';
import styled from 'styled-components';

const RadioStyled = styled.label`
  border-bottom: 2px solid #aaaaaa;
`;

const Radio = ({
  children,
  value,
  name,
  checked,
  onChange,
  ...otherProps
}) => {
  return (
    <RadioStyled>
      {children}
      &nbsp;
      <input
        value={value}
        name={name}
        type="radio"
        onChange={onChange}
        checked={checked}
        {...otherProps}
      />
    </RadioStyled>
  );
};

export default Radio;
