import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const FooterStyled = styled.div`
  padding: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ClearButton = styled(Button)`
  min-width: 8px;
  padding: 0 8px;
`;

const Footer = ({ clear }) => {
  const alertMessage =
    'Are you sure? It beyond retrieve remove all completed todos.';
  return (
    <FooterStyled>
      <ClearButton
        onClick={() => clear({ text: alertMessage, type: 'confirm' })}
      >
        Clear completed
      </ClearButton>
    </FooterStyled>
  );
};

export default Footer;
