import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  #root {
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
  }
`;
