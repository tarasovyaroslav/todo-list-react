import React from 'react';
import styled from 'styled-components';

import Title from './components/Title';
import Content from './components/Content';

const Container = styled.h1`
    width: 40%;
    min-width: 350px;
    padding: 15px;
    font-size: 1.25rem;
    position: relative;
`;

const App = () => {
    return (
        <Container>
            <Title />
            <Content />
        </Container>
    );
};

export default App;
