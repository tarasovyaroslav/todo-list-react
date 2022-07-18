import React from 'react';
import styled from 'styled-components';

const InfoMessageStyled = styled.div`
  text-align: center;
  padding: 1.5rem;
  width: 100%;
`;

const InfoMessage = ({ message }) => {
  return <InfoMessageStyled>{message}</InfoMessageStyled>;
};

export default InfoMessage;
