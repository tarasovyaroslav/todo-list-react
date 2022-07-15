import React from 'react';
import styled from 'styled-components';

const FlexStyled = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'stretch'};
  justify-content: ${({ justify }) => justify || 'stretch'};
  margin: ${({ margin }) => margin || '0'};
  gap: ${({ gap }) => gap || '0'};
`;

const FlexContainer = (props) => {
  return <FlexStyled {...props} />;
};

export default FlexContainer;
