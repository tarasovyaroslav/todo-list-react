// import React from 'react';
import styled, { css } from 'styled-components';

const FlexStyled = styled.div`
  display: flex;

  ${({ direction, align, justify, margin, gap }) => css`
    flex-direction: ${direction || 'row'};
    align-items: ${align || 'stretch'};
    justify-content: ${justify || 'stretch'};
    margin: ${margin || '0'};
    gap: ${gap || '0'};
  `}
`;

// const FlexContainer = (props) => {
//   return <FlexStyled {...props} />;
// };

export default FlexStyled;
