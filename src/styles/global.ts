import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: #F9F9F9;
        -webkit-font-smoothing: antialiased;
        padding: 30px 35px;
    }

    body, input, button {
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
    } 

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
        color: #2C2C2C;
    }

    p, span, label {
        color: #2C2C2C;
    }

    button {
        cursor: pointer;
    }
`;
