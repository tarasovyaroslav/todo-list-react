import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    border-radius: 5px;
    box-shadow: 1px 1px 15px lightgray;
    overflow-y: scroll;
    height: 600px;
`;

const Content = () => {
    return <Container>Some TODOs</Container>;
};

export default Content;
