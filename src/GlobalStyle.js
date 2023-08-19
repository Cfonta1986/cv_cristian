import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Josefin Sans', sans-serif;
        margin: 0;
        padding: 0;
        text-decoration: none;
        background-color: ${ ({ theme }) => theme.inside };
        color: ${ ({theme}) => theme.text };
    }
    *:hover{
        transition: all 1s ease-out;
    }
`;

export default GlobalStyle