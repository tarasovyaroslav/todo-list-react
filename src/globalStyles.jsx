import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        box-sizing: border-box;
    }

    #root {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
    }
`;
